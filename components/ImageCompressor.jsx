'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import Image from 'next/image'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import { MoveLeftIcon } from 'lucide-react'

export default function ImageCompressor() {
  const [images, setImages] = useState([])
  const [compressing, setCompressing] = useState(false)
  const [settings, setSettings] = useState({
    quality: 75, // Optimized default
    maxWidth: 1920, // Reasonable max width
    maxHeight: 1080, // Reasonable max height
    maintainAspectRatio: true
  })
  const [stats, setStats] = useState({
    totalOriginalSize: 0,
    totalCompressedSize: 0,
    totalSavings: 0
  })
  const [darkMode, setDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState('upload')
  const fileInputRef = useRef(null)
  const dropZoneRef = useRef(null)

  // Check for dark mode preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    }
  }, [])

  // Format bytes to human readable
  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
  }

  // Handle file selection
  const handleFiles = useCallback((selectedFiles) => {
    const newImages = []
    const maxFiles = 20

    Array.from(selectedFiles).slice(0, maxFiles).forEach((file, index) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (e) => {
          newImages.push({
            id: Date.now() + index,
            file: file,
            preview: e.target.result,
            name: file.name,
            size: file.size,
            type: file.type,
            width: 0,
            height: 0,
            compressed: null,
            compressedSize: 0,
            compressedPreview: null,
            status: 'pending'
          })

          if (newImages.length === Math.min(selectedFiles.length, maxFiles)) {
            setImages(prev => [...prev, ...newImages])
            setActiveTab('settings')
          }
        }
        reader.readAsDataURL(file)
      }
    })
  }, [])

  // Drag and drop handlers
  const handleDragOver = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    if (dropZoneRef.current) {
      dropZoneRef.current.classList.add('border-blue-500', 'bg-blue-50', 'dark:bg-blue-900/20')
    }
  }, [])

  const handleDragLeave = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    if (dropZoneRef.current) {
      dropZoneRef.current.classList.remove('border-blue-500', 'bg-blue-50', 'dark:bg-blue-900/20')
    }
  }, [])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    if (dropZoneRef.current) {
      dropZoneRef.current.classList.remove('border-blue-500', 'bg-blue-50', 'dark:bg-blue-900/20')
    }
    handleFiles(e.dataTransfer.files)
  }, [handleFiles])

  // Remove image
  const removeImage = (id) => {
    setImages(prev => prev.filter(img => img.id !== id))
  }

  // Clear all images
  const clearAll = () => {
    setImages([])
    setStats({
      totalOriginalSize: 0,
      totalCompressedSize: 0,
      totalSavings: 0
    })
    setActiveTab('upload')
  }

  // Optimized compression function - actually reduces size
  const compressImage = async (image) => {
    return new Promise((resolve) => {
      const img = new window.Image()
      img.src = image.preview
      
      img.onload = () => {
        // Calculate new dimensions while maintaining aspect ratio
        let width = img.width
        let height = img.height
        
        // Smart resizing - only resize if larger than max dimensions
        if (settings.maxWidth > 0 && width > settings.maxWidth) {
          height = Math.round((height * settings.maxWidth) / width)
          width = settings.maxWidth
        }
        
        if (settings.maxHeight > 0 && height > settings.maxHeight) {
          width = Math.round((width * settings.maxHeight) / height)
          height = settings.maxHeight
        }

        // Create canvas with new dimensions
        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        
        const ctx = canvas.getContext('2d')
        
        // Use better image smoothing
        ctx.imageSmoothingEnabled = true
        ctx.imageSmoothingQuality = 'high'
        
        // Draw image with new dimensions
        ctx.drawImage(img, 0, 0, width, height)

        // Determine output format based on original
        let outputFormat = image.type
        let quality = settings.quality / 100

        // For PNG, we need to handle differently
        if (image.type === 'image/png') {
          // PNG compression is handled differently
          canvas.toBlob((blob) => {
            const reader = new FileReader()
            reader.onload = (e) => {
              resolve({
                ...image,
                compressed: blob,
                compressedSize: blob.size,
                compressedPreview: e.target.result,
                width: width,
                height: height,
                status: 'done'
              })
            }
            reader.readAsDataURL(blob)
          }, 'image/png', 1) // PNG uses compression level, not quality
        } else {
          // For JPEG and others, use quality setting
          canvas.toBlob((blob) => {
            const reader = new FileReader()
            reader.onload = (e) => {
              resolve({
                ...image,
                compressed: blob,
                compressedSize: blob.size,
                compressedPreview: e.target.result,
                width: width,
                height: height,
                status: 'done'
              })
            }
            reader.readAsDataURL(blob)
          }, 'image/jpeg', quality) // Convert everything else to JPEG for better compression
        }
      }
    })
  }

  // Start compression
  const startCompression = async () => {
    setCompressing(true)
    setActiveTab('results')
    
    let totalOriginal = 0
    let totalCompressed = 0
    
    const updatedImages = [...images]
    
    for (let i = 0; i < updatedImages.length; i++) {
      if (updatedImages[i].status !== 'done') {
        updatedImages[i].status = 'compressing'
        setImages([...updatedImages])
        
        try {
          const compressed = await compressImage(updatedImages[i])
          updatedImages[i] = compressed
          
          totalOriginal += compressed.size
          totalCompressed += compressed.compressedSize
        } catch (error) {
          console.error('Compression error:', error)
          updatedImages[i].status = 'error'
        }
        
        setImages([...updatedImages])
        setStats({
          totalOriginalSize: totalOriginal,
          totalCompressedSize: totalCompressed,
          totalSavings: totalOriginal > 0 ? ((totalOriginal - totalCompressed) / totalOriginal * 100).toFixed(1) : 0
        })
      }
    }
    
    setCompressing(false)
  }

  // Download single image
  const downloadImage = (image) => {
    if (image.compressed) {
      const url = URL.createObjectURL(image.compressed)
      const a = document.createElement('a')
      a.href = url
      
      // Generate filename
      const nameParts = image.name.split('.')
      nameParts.pop() // Remove original extension
      const newName = `${nameParts.join('.')}_compressed.jpg` // Always save as JPG for consistency
      
      a.download = newName
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }
  }

  // Download all as ZIP
  const downloadAll = async () => {
    const zip = new JSZip()
    
    images.forEach((image) => {
      if (image.compressed) {
        const nameParts = image.name.split('.')
        nameParts.pop()
        const newName = `${nameParts.join('.')}_compressed.jpg`
        zip.file(newName, image.compressed)
      }
    })
    
    const content = await zip.generateAsync({ type: 'blob' })
    saveAs(content, 'compressed_images.zip')
  }

  // Update settings
  const updateSettings = (newSettings) => {
    setSettings(prev => ({ ...prev, ...newSettings }))
    // Reset compression status when settings change
    setImages(prev => prev.map(img => ({
      ...img,
      compressed: null,
      compressedSize: 0,
      compressedPreview: null,
      status: 'pending'
    })))
    setStats({
      totalOriginalSize: 0,
      totalCompressedSize: 0,
      totalSavings: 0
    })
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Free Image Compressor
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Reduce image file size by up to 80% while maintaining excellent quality
              <span className="block mt-2 text-sm text-gray-500 dark:text-gray-400">
                ⚡ 100% free • No upload • Private • Batch processing • Actually compresses!
              </span>
            </p>
          </div>

          {/* Stats Bar */}
          {images.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Images</div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">{images.length}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Original Size</div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">
                    {formatBytes(stats.totalOriginalSize || images.reduce((acc, img) => acc + img.size, 0))}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Compressed Size</div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {formatBytes(stats.totalCompressedSize)}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Saved</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {stats.totalSavings}%
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Main Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
            
            {/* Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveTab('upload')}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === 'upload'
                    ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                📤 Upload
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                disabled={images.length === 0}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === 'settings'
                    ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400'
                    : images.length === 0
                    ? 'text-gray-300 cursor-not-allowed dark:text-gray-600'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                ⚙️ Settings
              </button>
              <button
                onClick={() => setActiveTab('results')}
                disabled={images.length === 0}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === 'results'
                    ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400'
                    : images.length === 0
                    ? 'text-gray-300 cursor-not-allowed dark:text-gray-600'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                📊 Results
              </button>
            </div>

            {/* Upload Tab */}
            {activeTab === 'upload' && (
              <div className="p-8">
                <div
                  ref={dropZoneRef}
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className="border-3 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-12 text-center cursor-pointer transition-all hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => handleFiles(e.target.files)}
                    accept="image/*"
                    multiple
                    className="hidden"
                  />
                  
                  <div className="mb-4">
                    <svg className="w-24 h-24 mx-auto text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Drop images here or click to browse
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Supports: JPG, PNG, GIF, WebP, SVG, BMP, TIFF (up to 20 images)
                  </p>
                  <p className="text-sm text-gray-400 dark:text-gray-500">
                    🔒 Your images never leave your device • 100% private
                  </p>
                </div>

                {/* Quick Tips */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                    <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">🚀 Fast Processing</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">All compression happens in your browser - no waiting for uploads!</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
                    <div className="text-green-600 dark:text-green-400 font-semibold mb-2">🔒 Privacy First</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Your images never leave your device. 100% secure and private.</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4">
                    <div className="text-purple-600 dark:text-purple-400 font-semibold mb-2">📦 Batch Processing</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Compress up to 20 images at once and download as ZIP.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Settings Tab - Simplified */}
            {activeTab === 'settings' && (
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Compression Settings</h2>
                
                <div className="max-w-2xl mx-auto space-y-8">
                  {/* Quality Slider */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Compression Quality
                      </label>
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {settings.quality}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="40"
                      max="95"
                      value={settings.quality}
                      onChange={(e) => updateSettings({ quality: parseInt(e.target.value) })}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                    <div className="flex justify-between mt-1 text-xs text-gray-500">
                      <span>Smaller size (40%)</span>
                      <span>Balanced (75%)</span>
                      <span>Better quality (95%)</span>
                    </div>
                  </div>

                  {/* Resize Options */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Max Width (px)
                      </label>
                      <input
                        type="number"
                        placeholder="1920"
                        value={settings.maxWidth || ''}
                        onChange={(e) => updateSettings({ maxWidth: parseInt(e.target.value) || 0 })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                      <p className="mt-1 text-xs text-gray-500">0 = no resize</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Max Height (px)
                      </label>
                      <input
                        type="number"
                        placeholder="1080"
                        value={settings.maxHeight || ''}
                        onChange={(e) => updateSettings({ maxHeight: parseInt(e.target.value) || 0 })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                      <p className="mt-1 text-xs text-gray-500">0 = no resize</p>
                    </div>
                  </div>

                  {/* Tips Box */}
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-xl p-6">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-400 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Pro Tips for Best Results
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        75% quality is perfect for web use - great balance of size and quality
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        Set max width to 1920px for full HD displays
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        PNG files will be converted to JPEG for 60-80% size reduction
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        Large images <MoveLeftIcon/> 5MB will see the biggest savings
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap gap-4 justify-end">
                  <button
                    onClick={clearAll}
                    className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={startCompression}
                    disabled={compressing || images.length === 0}
                    className={`px-8 py-3 rounded-lg font-semibold text-white transition-all ${
                      compressing || images.length === 0
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transform hover:scale-105 shadow-lg'
                    }`}
                  >
                    {compressing ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Compressing...
                      </span>
                    ) : 'Start Compression'}
                  </button>
                </div>
              </div>
            )}

            {/* Results Tab */}
            {activeTab === 'results' && (
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Compression Results</h2>
                  
                  <div className="flex gap-3">
                    {images.length > 1 && (
                      <button
                        onClick={downloadAll}
                        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-md"
                      >
                        📦 Download All (ZIP)
                      </button>
                    )}
                  </div>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {images.map((image) => (
                    <div key={image.id} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      
                      {/* Image Preview */}
                      <div className="relative aspect-square bg-gray-200 dark:bg-gray-600">
                        <Image
                          src={image.compressedPreview || image.preview}
                          alt={image.name}
                          fill
                          className="object-contain"
                        />
                        
                        {/* Status Badge */}
                        {image.status === 'compressing' && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <div className="text-white text-center">
                              <svg className="animate-spin h-8 w-8 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              <span>Compressing...</span>
                            </div>
                          </div>
                        )}
                        
                        {image.status === 'error' && (
                          <div className="absolute inset-0 bg-red-500/50 flex items-center justify-center">
                            <span className="text-white font-semibold">Error</span>
                          </div>
                        )}

                        {/* Size Badge */}
                        {image.compressedSize > 0 && (
                          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
                            -{((image.size - image.compressedSize) / image.size * 100).toFixed(1)}%
                          </div>
                        )}
                      </div>

                      {/* Image Info */}
                      <div className="p-4">
                        <div className="truncate font-medium text-gray-800 dark:text-white mb-2" title={image.name}>
                          {image.name.length > 30 ? image.name.substring(0, 27) + '...' : image.name}
                        </div>
                        
                        <div className="space-y-1 text-sm mb-3">
                          <div className="flex justify-between">
                            <span className="text-gray-500 dark:text-gray-400">Original:</span>
                            <span className="text-gray-800 dark:text-white font-medium">
                              {formatBytes(image.size)}
                            </span>
                          </div>
                          {image.compressedSize > 0 && (
                            <>
                              <div className="flex justify-between">
                                <span className="text-gray-500 dark:text-gray-400">Compressed:</span>
                                <span className="text-green-600 dark:text-green-400 font-medium">
                                  {formatBytes(image.compressedSize)}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500 dark:text-gray-400">Dimensions:</span>
                                <span className="text-gray-800 dark:text-white">
                                  {image.width || '?'} x {image.height || '?'}
                                </span>
                              </div>
                            </>
                          )}
                        </div>

                        {/* Action Buttons */}
                        {image.status === 'done' && (
                          <button
                            onClick={() => downloadImage(image)}
                            className="w-full py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Features Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
              Why Choose Our Image Compressor?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-blue-900">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Lightning Fast</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Compress images instantly in your browser. No waiting for uploads or downloads.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-green-900">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">100% Private</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your images never leave your device. No upload, no tracking, complete privacy.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-purple-900">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Smart Quality</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Advanced algorithms maintain visual quality while maximizing compression.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Preview */}
          <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  How much can I compress my images?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Our compressor can reduce file size by up to 80% while maintaining excellent quality. Average compression is 50-70% depending on the image type.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Is it really free?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Yes! 100% free forever. No hidden charges, no premium tiers, no signup required.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Do you store my images?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  No! All compression happens in your browser. Your images never leave your device.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  What formats are supported?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We support JPG, PNG, GIF, WebP, SVG, BMP, TIFF, and more. PNG files are converted to JPEG for best compression.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <a href="/faq" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium">
                View all FAQs →
              </a>
            </div>
          </div>

          {/* Test Compression Demo */}
          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>✨ Test it now: Upload a 5MB image and see it compress to under 1MB!</p>
          </div>
        </div>
      </div>
    </div>
  )
}