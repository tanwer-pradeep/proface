import React from "react";
import Temp from "../../../Temp";

const MainHeader = ({data}) => {
  return (
    <>
      <div className="header-wrapper">
        <div className="panel-pane pane-panels-mini pane-header">
          <div className="pane-content">
            <header
              className="proface-header proface-header"
              id="mini-panel-header"
            >
              <div className="header-main container">
                <div className="row">
                  <div className="col-md-12 proface-layouts-content panel-panel">
                    <div className="panel-panel-inner">
                      <div
                        className="bergertime berger-to-cross visible-xs"
                        id="nav-toggle"
                      >
                        <div className="berger-buns">
                          <div className="berger bgr-1"></div>
                          <div className="berger bgr-2"></div>
                          <div className="berger bgr-3"></div>
                        </div>
                      </div>
                      <div className="panel-pane pane-page-logo">
                        <div className="pane-content">
                          <a href="/en" rel="home" id="logo" title="Home">
                            <img
                              typeof="foaf:Image"
                              src="https://www.proface.com/sites/default/files/logo_20200930.png"
                              alt="Home"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="panel-pane pane-translated-menu-tree pane-translated-menu-header-menu header-menu-pane">
                        <div className="pane-content">
                          <div
                            className="lazy-pane-placeholder"
                            data-lazy-pane-id="annai_lazy_pane:node/12076:translated_menu_tree:translated_menu-header-menu:316:13"
                            data-lazy-pane-load-strategy="page-loaded"
                          ></div>
                        </div>
                      </div>
                      <div className="panel-pane pane-block pane-search-form">
                        <div className="pane-content">
                          <div
                            className="lazy-pane-placeholder"
                            data-lazy-pane-id="annai_lazy_pane:node/12076:block:search-form:59:13"
                            data-lazy-pane-load-strategy="page-loaded"
                          ></div>
                        </div>
                      </div>
                      <div className="magnifier visible-xs" id="search-toggle">
                        <i className="fa fa-search"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="proface-nav hidden-xs">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="panel-pane pane-translated-menu-tree pane-menu-main-menu-global-en">
                        <div className="pane-content">
                          <div className="menu-block-wrapper menu-block-ctools-main-menu-1 menu-name-menu-main-menu-global-en parent-mlid-0 menu-level-1">
                            <ul className="menu">
                              <Temp data={data} />
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
              <div className="proface-nav-xs-wrapper">
                <nav className="proface-nav-xs">
                  <div className="panel-pane pane-translated-menu-tree pane-menu-main-menu-global-en pane-system-main-menu">
                    <div className="pane-content">
                      <div className="menu-block-wrapper menu-block-ctools-main-menu-2 menu-name-menu-main-menu-global-en parent-mlid-0 menu-level-1">
                        <ul className="menu">
                          <li className="first leaf menu-mlid-3472 menu-link-home menu-link-home">
                            <a href="/en">Home</a>
                          </li>
                          <li className="expanded menu-mlid-3473 menu-link-products">
                            <span className="nolink">Products</span>
                            <ul className="proface-dropdown-menu">
                              <li className="first expanded menu-mlid-3835 dropdown menu-link-hmi">
                                <span className="nolink">HMI</span>
                                <ul className="proface-dropdown-menu">
                                  <li className="first leaf menu-mlid-6096 dropdown menu-link-hmi-top">
                                    <a href="/en/product/hmi/top">HMI TOP</a>
                                  </li>
                                  <li className="leaf menu-mlid-3475 dropdown menu-link-product-search-specification">
                                    <a href="/en/product/hmi/compare">
                                      Product Search/Specification
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-3476 dropdown menu-link-sp5000-series">
                                    <a href="/en/product/hmi/sp5000/top">
                                      SP5000 Series
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-6227 dropdown menu-link-sp5000x-series">
                                    <a
                                      href="/en/product/hmi/sp5000x/top"
                                      className="menu-node-unpublished menu-node-unpublished"
                                    >
                                      SP5000X Series
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-6294 dropdown menu-link-st6000-series">
                                    <a href="/en/product/hmi/st6000/top">
                                      ST6000 Series
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-6486 dropdown menu-link-stm6000-series">
                                    <a href="/en/product/hmi/stm6000/top">
                                      STM6000 Series
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-3781 dropdown menu-link-gp4000-series">
                                    <a href="/en/product/hmi/gp4000/top">
                                      GP4000 Series
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-3479 dropdown menu-link-gp4000r-rear-mount-series">
                                    <a href="/en/product/hmi/gp4000r/top">
                                      GP4000R (Rear mount) Series
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-3782 dropdown menu-link-gp4000m-series">
                                    <a href="/en/product/hmi/gp4000m/top">
                                      GP4000M Series
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-4656 dropdown menu-link-gp4000h-series">
                                    <a href="/en/product/hmi/gp4000h/top">
                                      GP4000H Series
                                    </a>
                                  </li>
                                  <li className="last leaf menu-mlid-3783 dropdown menu-link-gp4100-series">
                                    <a href="/en/product/hmi/gp4100/top">
                                      GP4100 Series
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="expanded menu-mlid-3836 dropdown menu-link-hmi--control">
                                <span className="nolink">HMI + Control</span>
                                <ul className="proface-dropdown-menu">
                                  <li className="first leaf menu-mlid-6097 dropdown menu-link-hmi--control-top">
                                    <a href="/en/product/hmi_control/top">
                                      HMI + Control TOP
                                    </a>
                                  </li>
                                  <li className="last leaf menu-mlid-3484 dropdown menu-link-lt4000m-series">
                                    <a href="/en/product/hmi_control/lt4000m/top">
                                      LT4000M Series
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="expanded menu-mlid-3834 dropdown menu-link-industrial-pc-ipc">
                                <span className="nolink">
                                  Industrial PC (IPC)
                                </span>
                                <ul className="proface-dropdown-menu">
                                  <li className="first leaf menu-mlid-6098 dropdown menu-link-industrial-pc-ipc-top">
                                    <a href="/en/product/ipc/top">
                                      Industrial PC (IPC) TOP
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-3487 dropdown menu-link-product-search-specification">
                                    <a href="/en/product/ipc/compare">
                                      Product Search/Specification
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-6488 dropdown menu-link-ps6000-series">
                                    <a href="/en/product/ipc/ps6000/top">
                                      PS6000 Series
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-3488 dropdown menu-link-ps5000-series">
                                    <a
                                      href="/en/product/ipc/ps5000/top"
                                      className="menu-node-unpublished menu-node-unpublished menu-node-unpublished"
                                    >
                                      PS5000 Series
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-3784 dropdown menu-link-ps4000-series">
                                    <a href="/en/product/ipc/ps4000/top">
                                      PS4000 Series
                                    </a>
                                  </li>
                                  <li className="last leaf menu-mlid-3785 dropdown menu-link-pe4000b-series">
                                    <a href="/en/product/ipc/pe4000b/top">
                                      PE4000B Series
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="expanded menu-mlid-6266 dropdown menu-link-web-hmi">
                                <span className="nolink">Web HMI</span>
                                <ul className="proface-dropdown-menu">
                                  <li className="first leaf menu-mlid-6267 dropdown menu-link-web-hmi-top">
                                    <a href="/en/product/web_hmi/top">
                                      Web HMI TOP
                                    </a>
                                  </li>
                                  <li className="last leaf menu-mlid-6268 dropdown menu-link-stw6000-series">
                                    <a href="/en/product/web_hmi/stw6000/top">
                                      STW6000 Series
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="expanded menu-mlid-3837 dropdown menu-link-flat-panel-monitors">
                                <span className="nolink">
                                  Flat Panel Monitors
                                </span>
                                <ul className="proface-dropdown-menu">
                                  <li className="first leaf menu-mlid-6099 dropdown menu-link-flat-panel-monitors-top">
                                    <a href="/en/product/fp/top">
                                      Flat Panel Monitors TOP
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-5485 dropdown menu-link-selection-guide">
                                    <a
                                      href="/en/product/fp/select"
                                      className="menu-node-unpublished"
                                    >
                                      Selection Guide
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-6560 dropdown menu-link-fp6000-series">
                                    <a
                                      href="/en/product/fp/fp6000/top"
                                      className="menu-node-unpublished"
                                    >
                                      FP6000 Series
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-3630 dropdown menu-link-fp5000-series">
                                    <a href="/en/product/fp/fp5000/top">
                                      FP5000 Series
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-5474 dropdown menu-link-sp5000-series-multi-display-adapter">
                                    <a href="/en/product/fp/mda_sp5000/top">
                                      SP5000 Series Multi Display Adapter
                                    </a>
                                  </li>
                                  <li className="last leaf menu-mlid-5480 dropdown menu-link-ps5000-series-display-adapter">
                                    <a
                                      href="/en/product/fp/mda_ps5000/top"
                                      className="menu-node-unpublished menu-node-unpublished menu-node-unpublished"
                                    >
                                      PS5000 Series Display Adapter
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="expanded menu-mlid-3496 dropdown menu-link-software">
                                <span className="nolink">Software</span>
                                <ul className="proface-dropdown-menu">
                                  <li className="first leaf menu-mlid-6100 dropdown menu-link-software-top">
                                    <a href="/en/product/soft/top">
                                      Software TOP
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-3497 dropdown menu-link-gp-pro-ex">
                                    <a href="/en/product/soft/gpproex/top">
                                      GP-Pro EX
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-3498 dropdown menu-link-pro-server-ex">
                                    <a href="/en/product/soft/proserverex/top">
                                      Pro-Server EX
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-6503 dropdown menu-link-secure-remote-access-pro-face-connect">
                                    <a href="/en/product/soft/proface_connect/top">
                                      Secure Remote Access Pro-face Connect
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-3500 dropdown menu-link-pro-face-remote-hmi">
                                    <a href="/en/product/soft/remotehmi/top">
                                      Pro-face Remote HMI
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-5523 dropdown menu-link-pro-face-remote-hmi-client-for-win">
                                    <a href="/en/product/soft/remotehmi_client/top">
                                      Pro-face Remote HMI Client for Win
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-3501 dropdown menu-link-blue">
                                    <a href="/en/product/soft/blue/top">BLUE</a>
                                  </li>
                                  <li className="last leaf menu-mlid-5847 dropdown menu-link-blue-open-studio">
                                    <a href="/en/product/soft/blue-os/top">
                                      BLUE Open Studio
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="expanded menu-mlid-3828 dropdown menu-link-data-collection-devices">
                                <span className="nolink">
                                  Data Collection Devices
                                </span>
                                <ul className="proface-dropdown-menu">
                                  <li className="first leaf menu-mlid-5291 dropdown menu-link-multi-converter">
                                    <a
                                      href="/en/product/commu_equip/data_collect/top"
                                      className="menu-node-unpublished"
                                    >
                                      Multi-Converter
                                    </a>
                                  </li>
                                  <li className="last leaf menu-mlid-5838 dropdown menu-link-pro-face-iot-gateway">
                                    <a
                                      href="/en/product/commu_equip/iot_gw/top"
                                      className="menu-node-unpublished"
                                    >
                                      Pro-face IoT Gateway
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="expanded menu-mlid-3864 dropdown menu-link-other-hardware">
                                <span className="nolink">Other Hardware</span>
                                <ul className="proface-dropdown-menu">
                                  <li className="first leaf menu-mlid-6109 dropdown menu-link-other-hardware-top">
                                    <a href="/en/product/other/top">
                                      Other Hardware TOP
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-3840 dropdown menu-link-ez-series-usb-solutions">
                                    <a href="/en/product/other/ez/top">
                                      EZ Series USB Solutions
                                    </a>
                                  </li>
                                  <li className="last leaf menu-mlid-3507 dropdown menu-link-canopen-slave-htb-unit">
                                    <a href="/en/product/commu_equip/htb/top">
                                      CANOpen Slave HTB Unit
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="leaf menu-mlid-3554 dropdown menu-link-discontinued-products">
                                <a href="/en/product/discon/top">
                                  Discontinued Products
                                </a>
                              </li>
                              <li className="leaf menu-mlid-5059 dropdown menu-link-recommended-substitute-products">
                                <a href="http://www.pro-face.com/otasuke/replace_search/contents_replace_e.html">
                                  Recommended Substitute Products
                                </a>
                              </li>
                              <li className="last expanded menu-mlid-5153 dropdown menu-link-customization-and-services">
                                <span className="nolink">
                                  Customization and Services
                                </span>
                                <ul className="proface-dropdown-menu">
                                  <li className="first last leaf menu-mlid-5155 dropdown menu-link-customization-and-services">
                                    <a
                                      href="/en/product/customization"
                                      className="menu-node-unpublished menu-node-unpublished menu-node-unpublished"
                                    >
                                      Customization and Services
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="expanded menu-mlid-3508 menu-link-solution">
                            <span className="nolink">Solution</span>
                            <ul className="proface-dropdown-menu">
                              <li className="first last leaf menu-mlid-3510 dropdown menu-link-pro-face-solution">
                                <a href="/en/solution_top">Pro-face Solution</a>
                              </li>
                            </ul>
                          </li>
                          <li className="expanded menu-mlid-3512 menu-link-support">
                            <span className="nolink">Support</span>
                            <ul className="proface-dropdown-menu">
                              <li className="first leaf menu-mlid-5626 dropdown menu-link-support-index-otasuke-pro">
                                <a
                                  href="https://www.pro-face.com/otasuke/index.html"
                                  target="_blank"
                                >
                                  Support Index (Otasuke Pro!)
                                </a>
                              </li>
                              <li className="leaf menu-mlid-6496 dropdown menu-link-hmi-design-studio">
                                <a href="/en/service">HMI Design Studio</a>
                              </li>
                              <li className="expanded menu-mlid-3513 dropdown menu-link-frequently-asked-questions">
                                <span className="nolink">
                                  Frequently Asked Questions
                                </span>
                                <ul className="proface-dropdown-menu">
                                  <li className="first leaf menu-mlid-4632 dropdown menu-link-knowledge-base-faqs">
                                    <a href="/en/support/faq">
                                      Knowledge Base (FAQs)
                                    </a>
                                  </li>
                                  <li className="last leaf menu-mlid-3801 dropdown menu-link-pro-face-remote-hmi-qa">
                                    <a href="https://www.pro-face.com/otasuke/qa/remotehmi/">
                                      Pro-face Remote HMI Q&amp;A
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="leaf menu-mlid-4729 dropdown menu-link-standards-and-regulations">
                                <a href="/en/support/worldwide/safety/top">
                                  Standards and Regulations
                                </a>
                              </li>
                              <li className="leaf menu-mlid-5039 dropdown menu-link-recommended-substitute-products">
                                <a href="https://www.pro-face.com/otasuke/replace_search/contents_replace_e.html">
                                  Recommended Substitute Products
                                </a>
                              </li>
                              <li className="leaf menu-mlid-4728 dropdown menu-link-inquiries">
                                <a href="/en/node/12210">Inquiries</a>
                              </li>
                              <li className="last leaf menu-mlid-6313 dropdown menu-link-cybersecurity">
                                <a href="/en/news?keys=&amp;category=16155&amp;date_filter%25255Bmin%25255D%25255Bdate%25255D=&amp;date_filter%25255Bmax%25255D%25255Bdate%25255D=">
                                  Cybersecurity
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="expanded menu-mlid-3572 menu-link-downloads">
                            <span className="nolink">Downloads</span>
                            <ul className="proface-dropdown-menu">
                              <li className="first leaf menu-mlid-3806 dropdown menu-link-keyword--advanced-search">
                                <a href="/en/download/search">
                                  Keyword &amp; Advanced Search
                                </a>
                              </li>
                              <li className="leaf menu-mlid-3805 dropdown menu-link-manuals">
                                <a href="/en/download/search?f%5B0%5D=field_dwn_kind_of_files%3A14275">
                                  Manuals
                                </a>
                              </li>
                              <li className="leaf menu-mlid-3807 dropdown menu-link-catalogs">
                                <a href="/en/download/search?f%5B0%5D=field_dwn_kind_of_files%3A15676">
                                  Catalogs
                                </a>
                              </li>
                              <li className="leaf menu-mlid-3808 dropdown menu-link-updates--drivers">
                                <a href="/en/download/search?f%5B0%5D=field_dwn_kind_of_files%3A14655">
                                  Updates &amp; Drivers
                                </a>
                              </li>
                              <li className="leaf menu-mlid-3809 dropdown menu-link-device-connection-samples">
                                <a href="/en/download/search?f%5B0%5D=field_dwn_kind_of_files%3A14883">
                                  Device Connection Samples
                                </a>
                              </li>
                              <li className="leaf menu-mlid-3810 dropdown menu-link-export-documents">
                                <a href="https://www.pro-face.com/otasuke/download/ear/">
                                  Export Documents
                                </a>
                              </li>
                              <li className="last leaf menu-mlid-5063 dropdown menu-link-recommended-substitute-products">
                                <a href="https://www.pro-face.com/otasuke/replace_search/contents_replace_e.html">
                                  Recommended Substitute Products
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="last expanded active-trail menu-mlid-3555 active menu-link-about-pro-face">
                            <span className="active-trail nolink">
                              About Pro-face
                            </span>
                            <ul className="proface-dropdown-menu">
                              <li className="first expanded active-trail menu-mlid-3786 dropdown active menu-link-pro-face-brand">
                                <span className="active-trail nolink">
                                  Pro-face Brand
                                </span>
                                <ul className="proface-dropdown-menu">
                                  <li className="first leaf menu-mlid-6110 dropdown menu-link-pro-face-brand-top">
                                    <a href="/en/company/brand/top">
                                      Pro-face Brand TOP
                                    </a>
                                  </li>
                                  <li className="leaf active-trail active menu-mlid-3791 dropdown active active menu-link-overview--history">
                                    <a
                                      href="/en/company/info/history"
                                      className="active-trail active-trail active"
                                    >
                                      Overview &amp; History
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-3787 dropdown menu-link-brand-concept">
                                    <a href="/en/hmi_centric">Brand Concept</a>
                                  </li>
                                  <li className="last leaf menu-mlid-3796 dropdown menu-link-brand-initiatives">
                                    <a href="/en/company/brand/effort">
                                      Brand Initiatives
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="expanded menu-mlid-3788 dropdown menu-link-corporate-social-responsibility">
                                <span className="nolink">
                                  Corporate Social Responsibility
                                </span>
                                <ul className="proface-dropdown-menu">
                                  <li className="first leaf menu-mlid-3792 dropdown menu-link-people">
                                    <a href="/en/company/csr/people">People</a>
                                  </li>
                                  <li className="leaf menu-mlid-3793 dropdown menu-link-community">
                                    <a href="/en/company/csr/society">
                                      Community
                                    </a>
                                  </li>
                                  <li className="last leaf menu-mlid-3794 dropdown menu-link-environment">
                                    <a href="/en/company/csr/environment">
                                      Environment
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="expanded menu-mlid-5186 dropdown menu-link-how-to-buy">
                                <span className="nolink">How to Buy</span>
                                <ul className="proface-dropdown-menu">
                                  <li className="first leaf menu-mlid-5194 dropdown menu-link-australia--new-zealand">
                                    <a
                                      href="/en/local/australia/channelpartners"
                                      className="menu-node-unpublished"
                                    >
                                      Australia &amp; New Zealand
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-5193 dropdown menu-link-china">
                                    <a href="https://www.proface.com.cn/">
                                      China
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-5195 dropdown menu-link-india">
                                    <a href="/en/local/india/channelpartners">
                                      India
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-5190 dropdown menu-link-europe">
                                    <a href="https://www.proface.eu/">Europe</a>
                                  </li>
                                  <li className="leaf menu-mlid-5192 dropdown menu-link-japan">
                                    <a href="https://www.proface.com/ja/support/distributor">
                                      Japan
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-5188 dropdown menu-link-north-america">
                                    <a href="https://profaceamerica.com/">
                                      North America
                                    </a>
                                  </li>
                                  <li className="leaf menu-mlid-5189 dropdown menu-link-south-korea">
                                    <a href="https://www.proface.com/ko/">
                                      South Korea
                                    </a>
                                  </li>
                                  <li className="last leaf menu-mlid-5191 dropdown menu-link-taiwan">
                                    <a href="https://www.proface.com/zh-hant/">
                                      Taiwan
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="leaf menu-mlid-3950 dropdown menu-link-news">
                                <a href="/en/news?keys=&amp;category=15733">
                                  News
                                </a>
                              </li>
                              <li className="last expanded menu-mlid-5128 dropdown menu-link-worldwide-offices">
                                <span className="nolink">
                                  Worldwide Offices
                                </span>
                                <ul className="proface-dropdown-menu">
                                  <li className="first leaf menu-mlid-3798 dropdown menu-link-asia">
                                    <a href="/en/contact#asia">Asia</a>
                                  </li>
                                  <li className="leaf menu-mlid-3797 dropdown menu-link-americas">
                                    <a href="/en/contact#america">Americas</a>
                                  </li>
                                  <li className="last leaf menu-mlid-3799 dropdown menu-link-europe">
                                    <a href="/en/contact#europe">Europe</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel-pane pane-translated-menu-tree pane-menu-header-menu-global-en header-menu-pane-xs">
                    <div className="pane-content">
                      <div className="menu-block-wrapper menu-block-ctools-menu-header-menu-1 menu-name-menu-header-menu-global-en parent-mlid-0 menu-level-1">
                        <ul className="menu">
                          <li className="first leaf menu-mlid-5073 menu-link-worldwide">
                            <a href="/en/node/12210">Worldwide</a>
                          </li>
                          <li className="last leaf menu-mlid-5074 menu-link-contact">
                            <a href="/en/contact">Contact</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="proface-nav-xs-close" id="nav-closeer">
                    CLOSE
                  </div>
                </nav>
              </div>
              <div className="series-menu-wrapper hidden-xs">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="panel-pane pane-views-panes pane-series-menublock-panel-pane-1 series-menu">
                        <div className="pane-content">
                          <div className="view view-series-menublock view-id-series_menublock view-display-id-panel_pane_1 view-dom-id-2d9460754da6cbfe70a292d98976540c">
                            <div className="view-content">
                              <div className="views-row views-row-1 views-row-odd views-row-first views-row-last">
                                <div
                                  about="/en/node/12113"
                                  typeof="sioc:Item foaf:Document"
                                  className="ds-1col node node-prd-series-menu view-mode-embedded  clearfix"
                                >
                                  <div className="field-name-field-prd-series-selector">
                                    SP5000 Series
                                  </div>
                                  <div className="field field-name-field-prd-series-links field-type-link-field field-label-hidden">
                                    <div className="field-items">
                                      <div className="field-item even">
                                        <div className="item-list">
                                          <ul>
                                            <li className="first">
                                              <a href="https://www.proface.com/en/product/hmi/sp5000/top">
                                                Series TOP
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://www.proface.com/en/product/hmi/sp5000/lineup">
                                                <i className="fa fa-share-alt-square"></i>
                                                Lineup / Specifications
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://www.proface.com/en/product/hmi/sp5000/feature">
                                                <i className="fa fa-star-o"></i>
                                                Features
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://www.proface.com/en/product/hmi/sp5000/option">
                                                <i className="fa fa-cog"></i>
                                                Options
                                              </a>
                                            </li>
                                            <li className="last">
                                              <a href="https://www.proface.com/en/product/hmi/sp5000/download">
                                                <i className="fa fa-cloud-download"></i>
                                                Support / Downloads
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="series-menu-xs-wrapper visible-xs">
                <div className="panel-pane pane-views-panes pane-series-menublock-panel-pane-1 series-menu-xs">
                  <div className="pane-content">
                    <div className="view view-series-menublock view-id-series_menublock view-display-id-panel_pane_1 view-dom-id-27f1c622f64a5fe627af8c596af451db">
                      <div className="view-content">
                        <div className="views-row views-row-1 views-row-odd views-row-first views-row-last">
                          <div
                            about="/en/node/12113"
                            typeof="sioc:Item foaf:Document"
                            className="ds-1col node node-prd-series-menu view-mode-embedded  clearfix"
                          >
                            <div className="field-name-field-prd-series-selector">
                              SP5000 Series
                            </div>
                            <div className="field field-name-field-prd-series-links field-type-link-field field-label-hidden">
                              <div className="field-items">
                                <div className="field-item even">
                                  <div className="item-list">
                                    <ul>
                                      <li className="first">
                                        <a href="https://www.proface.com/en/product/hmi/sp5000/top">
                                          Series TOP
                                        </a>
                                      </li>
                                      <li>
                                        <a href="https://www.proface.com/en/product/hmi/sp5000/lineup">
                                          <i className="fa fa-share-alt-square"></i>
                                          Lineup / Specifications
                                        </a>
                                      </li>
                                      <li>
                                        <a href="https://www.proface.com/en/product/hmi/sp5000/feature">
                                          <i className="fa fa-star-o"></i>
                                          Features
                                        </a>
                                      </li>
                                      <li>
                                        <a href="https://www.proface.com/en/product/hmi/sp5000/option">
                                          <i className="fa fa-cog"></i>Options
                                        </a>
                                      </li>
                                      <li className="last">
                                        <a href="https://www.proface.com/en/product/hmi/sp5000/download">
                                          <i className="fa fa-cloud-download"></i>
                                          Support / Downloads
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
              <div className="proface-search-xs">
                <div className="panel-pane pane-block pane-search-form">
                  <div className="pane-content">
                    <div
                      className="lazy-pane-placeholder"
                      data-lazy-pane-id="annai_lazy_pane:node/12076:block:search-form:169:13"
                      data-lazy-pane-load-strategy="page-loaded"
                    ></div>
                  </div>
                </div>
                <div className="proface-nav-xs-close" id="search-closeer">
                  CLOSE
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
