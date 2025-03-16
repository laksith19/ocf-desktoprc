var newPanel = new Panel
newPanel.location = "top"

var launcher = newPanel.addWidget("org.kde.plasma.kicker")
var pager = newPanel.addWidget("org.kde.plasma.pager")
pager.currentConfigGroup = ["General"]
pager.writeConfig("showOnlyCurrentScreen", false)


var spacer = newPanel.addWidget("org.kde.plasma.panelspacer")
spacer.expandable = true

var paper = newPanel.addWidget("com.github.zren.commandoutput")
paper.writeConfig("command", "paper-genmon")
paper.writeConfig("fontSize", "10")

var clock = newPanel.addWidget("org.kde.plasma.digitalclock")
clock.currentConfigGroup = ["Appearance"]
clock.writeConfig("showDate", true)


var logout = newPanel.addWidget("org.kde.plasma.lock_logout")




