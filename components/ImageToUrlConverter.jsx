// components/ImageToUrlConverter.jsx
'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { useDropzone } from 'react-dropzone'
import {
  Upload,
  X,
  Copy,
  Check,
  Link as LinkIcon,
  Image as ImageIcon,
  Trash2,
  Download,
  Share2,
  Clock,
  Shield,
  Zap,
  Globe,
  Smartphone,
  Eye,
  Loader2,
  AlertCircle,
  CheckCircle,
  FileImage,
  History,
  Settings,
  RefreshCw,
  DownloadCloud,
  Server,
  Cloud,
  Wifi,
  WifiOff,
  Clipboard,
  ClipboardPasteIcon,
 
} from 'lucide-react'

export default function ImageToUrlConverter() {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [imageUrl, setImageUrl] = useState('')
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')
  const [uploadHistory, setUploadHistory] = useState([])
  const [showHistory, setShowHistory] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [autoCopy, setAutoCopy] = useState(false)
 
  const [expiryTime] = useState('24h')
 
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 })
  const [fileSize, setFileSize] = useState(0)
  const [uploadTime, setUploadTime] = useState(null)
  const [serverStatus, setServerStatus] = useState('')
  const [apiBaseUrl] = useState('https://dynamic.techmintlab.com')
  const [pasteSupported, setPasteSupported] = useState(true)
  
  const pasteAreaRef = useRef(null)

  // Check server status on mount
  useEffect(() => {
    checkServerStatus()
    checkPasteSupport()
    
    // Add paste event listener
    document.addEventListener('paste', handlePaste)
    
    return () => {
      document.removeEventListener('paste', handlePaste)
    }
  }, [])

  const checkPasteSupport = () => {
    setPasteSupported(!!(navigator.clipboard && navigator.clipboard.read))
  }

  const checkServerStatus = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/api/health`)
      console.log(response)
      if (response.ok) {
        setServerStatus('online')
      } else {
        setServerStatus('offline')
      }
    } catch (error) {
      setServerStatus('offline')
    }
  }

  // Handle paste event
  const handlePaste = useCallback(async (event) => {
    
 

    const items = event.clipboardData?.items || event.clipboardData?.files
      console.log(items)
    if (!items) return

    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      
      // Check if it's an image
      if (item.type.indexOf('image') !== -1) {
        const file = item.getAsFile()
        if (file) {
          await processFile(file)
          break
        }
      }
    }
  }, [serverStatus])

  // Manual paste from clipboard button
  const handleManualPaste = useCallback(async () => {
    try {
      if (serverStatus !== 'online') {
        setError('Server is offline. Please try again later.')
        return
      }

      const clipboardItems = await navigator.clipboard.read()
      
      for (const clipboardItem of clipboardItems) {
        for (const type of clipboardItem.types) {
          if (type.startsWith('image/')) {
            const blob = await clipboardItem.getType(type)
            const file = new File([blob], `pasted-image-${Date.now()}.${type.split('/')[1]}`, { type })
            await processFile(file)
            return
          }
        }
      }
      
      setError('No image found in clipboard')
    } catch (err) {
      setError('Failed to read clipboard. Please ensure you have copied an image.')
    }
  }, [serverStatus])

  // Load history from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('imageUploadHistory')
    if (saved) {
      setUploadHistory(JSON.parse(saved))
    }
  }, [])

  // Save history to localStorage
  const saveToHistory = (url, filename, size, serverResponse) => {
    const newEntry = {
      id: Date.now(),
      url,
      filename,
      size,
      timestamp: new Date().toISOString(),
      serverData: serverResponse,
      expires: expiryTime !== 'never' ? new Date(Date.now() + parseExpiryTime(expiryTime)).toISOString() : null
    }
    const updated = [newEntry, ...uploadHistory.slice(0, 19)]
    setUploadHistory(updated)
    localStorage.setItem('imageUploadHistory', JSON.stringify(updated))
  }

  const parseExpiryTime = (time) => {
    const value = parseInt(time)
    if (time.includes('h')) return value * 60 * 60 * 1000
    if (time.includes('d')) return value * 24 * 60 * 60 * 1000
    if (time.includes('w')) return value * 7 * 24 * 60 * 60 * 1000
    return 24 * 60 * 60 * 1000
  }

  // Process file (common function for drop and paste)
  const processFile = async (selectedFile) => {
    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml', 'image/bmp', 'image/tiff']
    if (!validTypes.includes(selectedFile.type)) {
      setError('Please upload a valid image file (JPG, PNG, GIF, WebP, SVG, BMP, TIFF)')
      return
    }

    // Validate file size (max 50MB)
    if (selectedFile.size > 50 * 1024 * 1024) {
      setError('File size must be less than 50MB')
      return
    }

    setError('')
    setFile(selectedFile)
    setFileSize(selectedFile.size)
    
    // Create preview
    const reader = new FileReader()
    reader.onload = (e) => {
      setPreview(e.target.result)
      
      // Get image dimensions
      const img = new Image()
      img.onload = () => {
        setImageDimensions({ width: img.width, height: img.height })
      }
      img.src = e.target.result
    }
    reader.readAsDataURL(selectedFile)

    // Start upload
    setUploading(true)
    setProgress(0)
    const startTime = Date.now()
    
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) return prev
        return prev + Math.random() * 10
      })
    }, 200)
    
    try {
      const result = await uploadToServer(selectedFile)
      
      clearInterval(progressInterval)
      setProgress(100)
      
      const fullUrl = result.imageUrl.startsWith('http') 
        ? result.imageUrl 
        : `${apiBaseUrl}/${result.imageUrl.replace(/\\/g, '/')}`
      
      setImageUrl(fullUrl)
      setUploadTime(Date.now() - startTime)
      
      if (autoCopy) {
        await navigator.clipboard.writeText(fullUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
      
      saveToHistory(fullUrl, selectedFile.name, selectedFile.size, result.data)
      
    } catch (err) {
      clearInterval(progressInterval)
      setError(`Upload failed: ${err.message}`)
    } finally {
      setUploading(false)
    }
  }

  // Real upload to backend server
  const uploadToServer = async (file) => {
    const formData = new FormData()
    formData.append('image', file)
    
    try {
      const response = await fetch(`${apiBaseUrl}/api/img-to-url/upload`, {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const onDrop = useCallback(async (acceptedFiles) => {
    const selectedFile = acceptedFiles[0]
    if (!selectedFile) return

    if (serverStatus !== 'online') {
      setError('Server is offline. Please try again later.')
      return
    }

    await processFile(selectedFile)
  }, [serverStatus])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp', '.svg', '.bmp', '.tiff']
    },
    maxSize: 50 * 1024 * 1024,
    multiple: false
  })

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(imageUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      setError('Failed to copy to clipboard')
    }
  }

  const resetUpload = () => {
    setFile(null)
    setPreview(null)
    setImageUrl('')
    setProgress(0)
    setError('')
    setImageDimensions({ width: 0, height: 0 })
    setFileSize(0)
    setUploadTime(null)
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const clearHistory = () => {
    setUploadHistory([])
    localStorage.removeItem('imageUploadHistory')
  }

  const removeFromHistory = (id) => {
    const updated = uploadHistory.filter(item => item.id !== id)
    setUploadHistory(updated)
    localStorage.setItem('imageUploadHistory', JSON.stringify(updated))
  }

  return (
    <>
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Image to URL Converter",
          "description": "Free online image to URL converter. Drag and drop or paste images to get instant shareable links.",
          "applicationCategory": "Utility",
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "featureList": "Drag and drop upload, Paste image support, Instant URL generation, Copy to clipboard, Upload history, Multiple format support"
        })}
      </script>

      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
        {/* Header */}
        

        <main className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-12">
           
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Convert Images to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Instant URLs
              </span>
            </h2>

            {/* Trust badges */}
         
          </div>

          {/* Main Converter Card */}
          <div className="max-w-4xl mx-auto">
            <div className={`rounded-3xl shadow-2xl overflow-hidden backdrop-blur-lg ${
              darkMode ? 'bg-gray-800/90' : 'bg-white/90'
            }`}>
              {/* Upload Options */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center text-sm">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-2">
                      <Upload className="w-4 h-4 text-blue-600" />
                    </div>
                    <span>Drag & Drop</span>
                  </div>
                  <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
                  <div className="flex items-center text-sm">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-2">
                      <ClipboardPasteIcon className="w-4 h-4 text-green-600" />
                    </div>
                    <span>Ctrl+V to Paste</span>
                  </div>
                </div>
              </div>

              {/* Upload Area */}
              {!imageUrl ? (
                <div
                  {...getRootProps()}
                  ref={pasteAreaRef}
                  className={`p-12 text-center cursor-pointer transition-all ${
                    isDragActive 
                      ? 'border-4 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20 scale-105' 
                      : 'border-3 border-dashed border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/10'
                  } ${serverStatus !== 'online' ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <input {...getInputProps()} disabled={serverStatus !== 'online'} />
                  
                  <div className="max-w-md mx-auto">
                    <div className={`w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center justify-center transition-transform ${
                      isDragActive ? 'scale-110 rotate-12' : ''
                    }`}>
                      {uploading ? (
                        <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
                      ) : serverStatus === 'offline' ? (
                        <WifiOff className="w-12 h-12 text-red-500" />
                      ) : (
                        <Upload className="w-12 h-12 text-blue-600" />
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3">
                      {serverStatus === 'offline' 
                        ? 'Server is offline' 
                        : isDragActive 
                        ? 'Drop your image here' 
                        : 'Drag & drop or paste image'}
                    </h3>
                    
                    {serverStatus === 'online' && (
                      <>
                        <p className="text-gray-500 dark:text-gray-400 mb-4">
                          or <span className="text-blue-600 font-semibold cursor-pointer">browse files</span>
                          {pasteSupported && (
                            <>
                              {" "}or{" "}
                              <span 
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleManualPaste()
                                }}
                                className="text-green-600 font-semibold cursor-pointer hover:underline"
                              >
                                paste from clipboard
                              </span>
                            </>
                          )}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 justify-center text-sm text-gray-500 dark:text-gray-400">
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">JPG</span>
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">PNG</span>
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">GIF</span>
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">WebP</span>
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">SVG</span>
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">+ more</span>
                        </div>
                        
                        <p className="mt-4 text-xs text-gray-400">
                          Max file size: 50MB • Images stored on local server
                        </p>
                      </>
                    )}

                    {serverStatus === 'offline' && (
                      <button
                        onClick={checkServerStatus}
                        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                      >
                        Retry Connection
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                // Success State
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                      <div>
                        <h3 className="text-xl font-bold">Upload Successful!</h3>
                        <p className="text-sm text-gray-500">Your image URL is ready</p>
                      </div>
                    </div>
                    <button
                      onClick={resetUpload}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
                    >
                      <Upload className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Image Preview */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className={`rounded-2xl overflow-hidden border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <div className="relative aspect-video bg-gray-100 dark:bg-gray-800">
                        {preview && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={preview}
                            alt="Preview"
                            className="w-full h-full object-contain"
                          />
                        )}
                      </div>
                      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">{file?.name}</span>
                          <span className="font-medium">{formatFileSize(fileSize)}</span>
                        </div>
                        {imageDimensions.width > 0 && (
                          <p className="text-xs text-gray-500 mt-1">
                            {imageDimensions.width} x {imageDimensions.height} pixels
                          </p>
                        )}
                      </div>
                    </div>

                    {/* URL Display */}
                    <div className={`rounded-2xl p-6 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <label className="block text-sm font-medium mb-2">Your Image URL</label>
                      <div className="flex items-center space-x-2">
                        <div className={`flex-1 flex items-center px-4 py-3 rounded-xl border ${
                          darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'
                        }`}>
                          <LinkIcon className="w-5 h-5 text-gray-400 mr-2" />
                          <input
                            type="text"
                            value={imageUrl}
                            readOnly
                            className="w-full bg-transparent outline-none text-sm truncate"
                          />
                        </div>
                        <button
                          onClick={copyToClipboard}
                          className={`p-3 rounded-xl transition-all ${
                            copied 
                              ? 'bg-green-500 text-white' 
                              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                          }`}
                        >
                          {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                        </button>
                      </div>

                      {/* Quick Actions */}
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        <a
                          href={imageUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center p-2 text-sm bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 transition-colors"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </a>
                        
                        <button
                          onClick={() => {
                            if (navigator.share) {
                              navigator.share({
                                title: 'Image URL',
                                url: imageUrl
                              })
                            }
                          }}
                          className="flex items-center justify-center p-2 text-sm bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 transition-colors"
                        >
                          <Share2 className="w-4 h-4 mr-1" />
                          Share
                        </button>
                      </div>

                      {/* Server Info */}
                      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                        <div className="flex items-center text-xs text-blue-600 dark:text-blue-400">
                          <Server className="w-3 h-3 mr-1" />
                          <span>Stored on: {apiBaseUrl}</span>
                        </div>
                      </div>

                      {/* Auto-copy toggle */}
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={autoCopy}
                            onChange={(e) => setAutoCopy(e.target.checked)}
                            className="sr-only"
                          />
                          <div className={`w-10 h-5 rounded-full transition-colors ${
                            autoCopy ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                          }`}>
                            <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                              autoCopy ? 'translate-x-5' : ''
                            }`}></div>
                          </div>
                          <span className="ml-3 text-sm">Auto-copy to clipboard</span>
                        </label>
                        <span className="text-xs text-gray-500">
                          Uploaded in {(uploadTime / 1000).toFixed(1)}s
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Upload Another */}
                  <button
                    onClick={resetUpload}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Upload Another Image
                  </button>
                </div>
              )}

              {/* Progress Bar */}
              {uploading && (
                <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Uploading... {Math.round(progress)}%</span>
                    <span className="text-xs text-gray-500">
                      {formatFileSize(fileSize)} • {(fileSize / 1024 / 1024).toFixed(2)} MB
                    </span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Error Display */}
              {error && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border-t border-red-200 dark:border-red-800">
                  <div className="flex items-center text-red-600 dark:text-red-400">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    <span>{error}</span>
                    <button onClick={() => setError('')} className="ml-auto">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* History Panel */}
          {showHistory && (
            <div className="max-w-4xl mx-auto mt-8">
              <div className={`rounded-2xl shadow-xl overflow-hidden ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold flex items-center">
                      <History className="w-5 h-5 mr-2" />
                      Recent Uploads
                    </h3>
                    <button
                      onClick={clearHistory}
                      className="text-sm text-red-600 hover:text-red-700"
                    >
                      Clear History
                    </button>
                  </div>
                </div>
                
                <div className="max-h-96 overflow-y-auto">
                  {uploadHistory.length === 0 ? (
                    <div className="p-12 text-center text-gray-500">
                      <History className="w-12 h-12 mx-auto mb-4 opacity-30" />
                      <p>No upload history yet</p>
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                      {uploadHistory.map((item) => (
                        <div key={item.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <FileImage className="w-8 h-8 text-blue-600" />
                              <div>
                                <p className="font-medium truncate max-w-xs">{item.filename}</p>
                                <div className="flex items-center text-xs text-gray-500 space-x-2">
                                  <span>{formatFileSize(item.size)}</span>
                                  <span>•</span>
                                  <span>{new Date(item.timestamp).toLocaleString()}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => {
                                  setImageUrl(item.url)
                                  setShowHistory(false)
                                }}
                                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                                title="Use this URL"
                              >
                                <RefreshCw className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => removeFromHistory(item.id)}
                                className="p-2 hover:bg-red-100 dark:hover:bg-red-900/20 text-red-600 rounded-lg transition-colors"
                                title="Remove"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          <p className="text-xl mt-4 !text-center text-gray-600 dark:text-gray-400">
            Drag & drop any image • Paste from clipboard • Get shareable link in seconds • <strong>50MB max</strong> • <strong>All formats</strong>
          </p>




   <div className="flex mt-4 flex-wrap gap-4 justify-center mb-8">
              {[
                { icon: <Shield className="w-4 h-4" />, text: 'Secure Upload' },
                { icon: <Zap className="w-4 h-4" />, text: 'Instant Links' },
                { icon: <Server className="w-4 h-4" />, text: 'Local Server' },
                { icon: <Cloud className="w-4 h-4" />, text: 'Cloud Storage' },
                { icon: <Clipboard className="w-4 h-4" />, text: 'Paste Support' }
              ].map((badge, i) => (
                <div key={i} className="flex items-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-sm">
                  <span className="text-blue-600 mr-2">{badge.icon}</span>
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>







          {/* Features Grid */}
          <div className="max-w-6xl mx-auto mt-20">
            <h3 className="text-2xl font-bold text-center mb-12">Why Choose Our Image to URL Converter?</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: 'Lightning Fast',
                  description: 'Convert images to URLs in seconds with our optimized upload system'
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: 'Secure & Private',
                  description: 'All uploads are encrypted and automatically deleted after expiry'
                },
                {
                  icon: <Server className="w-8 h-8" />,
                  title: 'Local Storage',
                  description: 'Images stored on your local server for complete control'
                },
                {
                  icon: <ImageIcon className="w-8 h-8" />,
                  title: 'All Formats',
                  description: 'Support for JPG, PNG, GIF, WebP, SVG, BMP, and more'
                },
                {
                  icon: <Smartphone className="w-8 h-8" />,
                  title: 'Mobile Friendly',
                  description: 'Works perfectly on all devices - phone, tablet, or desktop'
                },
                {
                  icon: <Clipboard className="w-8 h-8" />,
                  title: 'Paste Support',
                  description: 'Simply press Ctrl+V to paste images directly from clipboard'
                }
              ].map((feature, i) => (
                <div key={i} className={`p-6 rounded-2xl text-center ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-all`}>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center text-blue-600">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mt-20">
            <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
            
            <div className="space-y-4">
              {[
                {
                  q: 'Is this image to URL converter really free?',
                  a: 'Yes! Our service is 100% free with no hidden charges. You can upload images and get shareable links instantly.'
                },
                {
                  q: 'How do I paste an image?',
                  a: 'Simply copy an image (Ctrl+C) from anywhere, then press Ctrl+V in the upload area. You can also click on "paste from clipboard" link.'
                },
                {
                  q: 'What image formats are supported?',
                  a: 'We support all major formats: JPG, PNG, GIF, WebP, SVG, BMP, TIFF, and more.'
                },
                {
                  q: 'Is there a file size limit?',
                  a: 'Yes, maximum file size is 50MB per upload. This ensures fast uploads and optimal performance.'
                },
                {
                  q: 'Where are my images stored?',
                  a: 'Images are stored on our local server with organized date-based folders: uploads/img-to-url/YYYY/MM/DD/'
                }
              ].map((faq, i) => (
                <div key={i} className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-md`}>
                  <h4 className="font-semibold text-lg mb-2">{faq.q}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

// Icon components
function Sun(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}

function Moon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}

function ChevronDown(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}