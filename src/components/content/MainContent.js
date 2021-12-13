import React from "react";

const MainContent = () => {
  return (
    <div className="pane-main-content">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="panel-pane pane-block pane-crumbs-breadcrumb">
              <div className="pane-content">
                <h2 className="element-invisible">You are here</h2>
                <div className="breadcrumb">
                  <a href="/en">Home</a> » About Pro-face » Pro-face Brand »{" "}
                  <span className="crumbs-current-page">
                    Overview &amp; History
                  </span>
                </div>
              </div>
            </div>
            <div className="panel-pane pane-custom-node-title">
              <div className="pane-content">
                <h1>Title comes here</h1>
              </div>
            </div>
            <div className="panel-pane pane-block pane-proface-custom-favorites">
              <div className="pane-content">
                <div
                  className="lazy-pane-placeholder"
                  data-lazy-pane-id="annai_lazy_pane:panel_context:site_template::site_template__japanese::0:::block:proface_custom-favorites:582:89"
                  data-lazy-pane-load-strategy="page-loaded"
                ></div>
              </div>
            </div>
            <div className="panel-pane pane-pane-messages">
              <div className="pane-content">
                <div
                  className="lazy-pane-placeholder"
                  data-lazy-pane-id="annai_lazy_pane:panel_context:site_template::site_template__japanese::0:::pane_messages:pane_messages:583:89"
                  data-lazy-pane-load-strategy="page-loaded"
                ></div>
              </div>
            </div>
            <div className="panel-pane pane-page-content">
              <div className="pane-content">
                <div className="proface-plain">
                  <div className="panel-pane pane-entity-view pane-node">
                    <div className="pane-content">
                      <div className="node node-page view-mode-full ">
                        <div className="free-html free-html-no-top-margin">
                          <div className="field field-name-field-free-html field-type-text-long field-label-hidden">
                            <div className="field-items">
                              <div className="field-item even">
                                Contents come here
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
