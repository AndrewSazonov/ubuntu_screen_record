function Controller()
{
  installer.autoRejectMessageBoxes();
  gui.setSilent(true);
}

Controller.prototype.IntroductionPageCallback = function()
{
  gui.clickButton(buttons.NextButton);
}

Controller.prototype.TargetDirectoryPageCallback = function()
{
  //var page = gui.pageWidgetByObjectName("TargetDirectoryPage")
  //page.TargetDirectoryLineEdit.setText('/home/runner/easyDiffraction')
  gui.clickButton(buttons.NextButton);
}

Controller.prototype.ComponentSelectionPageCallback = function()
{
  var page = gui.currentPageWidget();
  page.selectAll();
  gui.clickButton(buttons.NextButton);
}

Controller.prototype.LicenseAgreementPageCallback = function()
{
  var page = gui.currentPageWidget();
  page.AcceptLicenseRadioButton.checked = true;
  gui.clickButton(buttons.NextButton);
}

Controller.prototype.StartMenuDirectoryPageCallback = function()
{
  gui.clickButton(buttons.NextButton);
}

Controller.prototype.ReadyForInstallationPageCallback = function()
{
  gui.clickButton(buttons.NextButton);
}

Controller.prototype.PerformInstallationPageCallback = function()
{
  gui.clickButton(buttons.NextButton);
}

Controller.prototype.FinishedPageCallback = function()
{
  gui.clickButton(buttons.FinishButton);
}
