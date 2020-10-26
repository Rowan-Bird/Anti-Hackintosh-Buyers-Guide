(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{378:function(e,t,r){"use strict";r.r(t);var n=r(25),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"networking"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#networking"}},[e._v("#")]),e._v(" Networking")]),e._v(" "),r("p",[e._v("This section is specifically for dedicated NICs, generally most networking is supported either natively, like with Aquantia, or has drivers provided Mieze:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/Mieze/IntelMausiEthernet",target:"_blank",rel:"noopener noreferrer"}},[e._v("IntelMausiEthernet.kext"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("For majority of Intel Controllers")])])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/khronokernel/SmallTree-I211-AT-patch/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("SmallTree-I211-AT-patch"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("For I211-AT which is commonly found on AMD boards")])])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/Mieze/AtherosE2200Ethernet",target:"_blank",rel:"noopener noreferrer"}},[e._v("AtherosE2200Ethernet.kext"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("For majority of Atheros Controllers")])])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/Mieze/RTL8111_driver_for_OS_X",target:"_blank",rel:"noopener noreferrer"}},[e._v("RealtekRTL8111"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("For Realtek's Gigabit Ethernet")])])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/Mieze/LucyRTL8125Ethernet",target:"_blank",rel:"noopener noreferrer"}},[e._v("LucyRTL8125Ethernet"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("For Realtek's 2.5Gb Ethernet")])])])]),e._v(" "),r("p",[e._v("Certain consumer NICs don't have support such as:")]),e._v(" "),r("ul",[r("li",[e._v("Realtek L8200A(Only found in Asus boards)")]),e._v(" "),r("li",[e._v("Intel I225-V")])]),e._v(" "),r("p",[e._v("For the i225-V, you can actually spoof it to a i225LM which is officially supported: "),r("a",{attrs:{href:"https://dortania.github.io/OpenCore-Install-Guide/config.plist/comet-lake.html#deviceproperties",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("The issues come in when you either involve onboard server NICs or dedicated hardware like Mellanox's MNPA19-XTR 10Gbe NIC. You need to be quite vigilante and see if either the manufactures or the Hackintosh community have developed drivers, or instead, you can take the safe route and grab a 10Gbe Aquantia AQtion AQC-107 NIC as these are shipped in the iMacPro1,1, Macmini8,1 and MacPro7,1 so full native support. Note that "),r("a",{attrs:{href:"https://www.insanelymac.com/forum/topic/330614-aquantia-10-gb-ethernet-support-thread-10132-upwards/",target:"_blank",rel:"noopener noreferrer"}},[e._v("certain brands need patches"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.small-tree.com/categories/10gb-ethernet-cards/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SmallTree"),r("OutboundLink")],1),e._v(" is the other popular option")]),e._v(" "),r("p",[r("strong",[e._v("NICs cards to avoid")])]),e._v(" "),r("ul",[r("li",[e._v("Intel Server NICs (including both 1Gbe and 10Gbe, "),r("a",{attrs:{href:"https://www.tonymacx86.com/threads/how-to-build-your-own-imac-pro-successful-build-extended-guide.229353/",target:"_blank",rel:"noopener noreferrer"}},[e._v("there are workarounds for X520 and X540 NICs"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("HP Server NICs (including both 1Gbe and 10Gbe, generally rebranded Qlogic)")]),e._v(" "),r("li",[e._v("Dell Server NICs (including both 1Gbe and 10Gbe, generally rebranded Broadcom or Intel)")]),e._v(" "),r("li",[e._v("Mellanox NICs")])])])}),[],!1,null,null,null);t.default=o.exports}}]);