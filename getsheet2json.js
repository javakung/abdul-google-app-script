function doGet(request){
  var sheet = SpreadsheetApp.openById('[SHEETID]')
  var values = sheet.getDataRange().getDisplayValues();
  var header = values[0];
  
  var data = [];
  for(var i = 1;i<values.length;i++){
    var u = values[i];
    var item = {};
    for(var x = 0;x<u.length;x++)item[header[x]]=u[x];
    data.push(item);
  } 
  return ContentService.createTextOutput(JSON.stringify(data))
  .setMimeType(ContentService.MimeType.JSON)
}
