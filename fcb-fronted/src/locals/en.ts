export default {
  send: {
    disclaimers:'Page Description',
    prompt1: 'Drag or paste text, files here, or ',
    prompt2: 'Days (<7) or limit times (delete after 24h)',
    prompt3: 'Please enter the text you want to send, supports MarkDown format',
    share: 'Share',
    textShare: 'Text Share',
    clickUpload: 'Click to upload',
    pleaseInputExpireValue: 'Please enter the expiration value',
    expireStyle: 'Expiration style',
    expireData: {
      day: 'Days',
      hour: 'Hours',
      forever: 'Forever',
      minute: 'Minutes',
      count: 'Times'
    },
    expireValue: {
      day: 'Day',
      hour: 'Hour',
      minute: 'Minute',
      count: 'Time'
    },
    fileType: {
      file: 'File',
      text: 'Text'
    }
  },
  fileBox: {
    copySuccess: 'Copied successfully',
    inputNotEmpty: 'Please enter a five-digit pickup code',
    sendFileBox: 'Sending Box',
    ok:'OK',
    receiveFileBox: 'Receiving Box',
    textDetail: 'Text Details',
    copy: 'Copy',
    close: 'Close',
    delete: 'Delete',
    download: 'Click to Download',
    detail: 'View Details',
    copyLink: 'Copy Link',
  },
  admin: {
    about: {
      source1: 'The project is open source on Github: ',
      source2: 'FileCodeBox'
    },
    settings: {
      name: 'Site Name',
      description: 'Site Description',
      uploadlimit: 'Upload Limit',
      explain:'Interface Description',
      errorlimit: 'Error Limit',
      keywords: 'Keywords',
      background: 'Background Image',
      admin_token: 'Admin Password',
      uploadSize: 'File Size',
      uploadSizeNote: 'Maximum file size, in bytes: (Bytes), 1mb=1 * 1024 * 1024',
      openUpload: {
        title: 'Enable Upload',
        open: 'Enable Guest Upload',
        close: 'Disable Guest Upload',
        note: 'After disabling, you need to log in to the backend to upload',
      },
      file_storage: {
        title: 'Storage Engine',
        local: 'Local Storage',
        s3: 'S3 Storage',
        note: 'FileCodeBox needs to be restarted after update',
      },
      mei: 'Every',
      minute: 'Minute',
      upload: 'Upload',
      files: 'Files',
      allow: 'Allow',
      errors: 'Errors',
      save: 'Save',
      saveSuccess: 'Saved successfully',
    },
    fileView: {
      code: 'Pickup Code',
      prefix: 'File Prefix',
      suffix: 'File Suffix',
      text: 'Text',
      used_count: 'Used Count',
      expired_count: 'Available Times',
      size: 'File Size',
      expired_at: 'Expiration Time',
      file_path: 'File Path',
      action: 'Action',
      delete: 'Delete',
      delete_success: 'Deleted successfully',
      forever: 'Permanent',
      unlimited_count: 'Unlimited Times',
      download: 'Download',
      download_fail: 'File save failed, please try again later~',
    },
    menu: {
      fileManage: 'File Management',
      systemSetting: 'System Settings',
      about: 'About Us',
      color: 'Color Mode',
      signout: 'Sign Out',
    },
    login: {
      managePassword: 'Admin Password',
      passwordNotEmpty: 'Password cannot be empty',
      login: 'Login',
      loginSuccess: 'Login successful',
      loginError: 'Login failed',
    }
  },
  msg:{
    fileOverSize: 'File too large',
    fileUploadFail: 'Upload failed',
    fileUploadSuccess: 'Upload successful',
  }
};