var g_sMainServiceLocalUrl = "/AsyncHandlers/CanvasService.ashx";var g_sResourceServiceLocalUrl = "/AsyncHandlers/ResourceService.ashx?path=";var g_sUploadServiceLocalUrl = "/AsyncHandlers/UploadService.ashx";var c_oEditorId = {    Word : 0,    Speadsheet : 1,    Presentation : 2}var PostMessageType = {    UploadImage : 0}var c_oAscServerError = {	NoError : 0,    Unknown : -1,    ReadRequestStream : -3,	    TaskQueue : -20,	    TaskResult : -40,	    Storage : -60,    StorageFileNoFound : -61,    StorageRead : -62,    StorageWrite : -63,    StorageRemoveDir : -64,    StorageCreateDir : -65,    StorageGetInfo : -66,		Convert : -80,    ConvertDownload : -81,    ConvertUnknownFormat : -82,    ConvertTimeout : -83,    ConvertReadFile : -84,	    Upload : -100,    UploadContentLength : -101,    UploadExtension : -102,    UploadCountFiles : -103,	    VKey : -120,    VKeyEncrypt : -121,    VKeyKeyExpire : -122,    VKeyUserCountExceed : -123}