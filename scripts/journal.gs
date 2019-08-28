

function onOpen() {
  addMenuEntry();
  setCursorToEnd();
  var date = Utilities.formatDate(new Date(), "GMT", "dd/MM/yyyy"); 
  var doc = DocumentApp.getActiveDocument();
  var body = DocumentApp.getActiveDocument().getBody();
  var text= body.getText();
  var result = text.indexOf(date)
  if (result == -1){
    insertEntry();
  }
  
}

function addMenuEntry(){
  DocumentApp.getUi().createMenu('Utilities')
      .addItem('Insert Entry Template', 'insertEntry')
      .addToUi();
}

function insertEntry() {
  var date = Utilities.formatDate(new Date(), "GMT", "dd/MM/yyyy"); 
  var doc = DocumentApp.getActiveDocument();
  var body = DocumentApp.getActiveDocument().getBody();
  var par = body.appendParagraph(date).setHeading(DocumentApp.ParagraphHeading.HEADING2);
  par = body.appendParagraph('Preparation for the day').setHeading(DocumentApp.ParagraphHeading.HEADING3);
  par = body.appendParagraph('\n').setHeading(DocumentApp.ParagraphHeading.NORMAL);
  var position = doc.newPosition(par, 0);
  doc.setCursor(position);
  par = body.appendParagraph('Today I will be:').setHeading(DocumentApp.ParagraphHeading.NORMAL).setBold(true);  
  par = body.appendParagraph('Reflection on the day').setHeading(DocumentApp.ParagraphHeading.HEADING3);
  par = body.appendParagraph('\n').setHeading(DocumentApp.ParagraphHeading.NORMAL);
  par = body.appendParagraph('Lesson learned:\n').setHeading(DocumentApp.ParagraphHeading.NORMAL).setBold(true).appendHorizontalRule();  
}

function setCursorToEnd(){
 var doc = DocumentApp.getActiveDocument();
 var paragraph = doc.getBody().appendParagraph('');
 var position = doc.newPosition(paragraph, 0);
 doc.setCursor(position);
  
}
