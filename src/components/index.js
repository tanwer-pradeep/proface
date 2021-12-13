import React, { useEffect } from "react";
import MainHeader from "./content/MainHeader";
import MainContent from "./content/MainContent";
import MainFooter from "./content/MainFooter";
import axios from "axios";
const url = `https://qa-backend.proface.com/jsonapi/menu_link_content/menu-main-en`;

const data = [
  {
    "type": "menu_link_content--menu-main-en",
    "id": "28293e12-9d37-4389-a2aa-472d50e07dc4",
    "links": {
      "self": {
        "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/28293e12-9d37-4389-a2aa-472d50e07dc4"
      }
    },
    "attributes": {
      "drupal_internal__id": 5465,
      "drupal_internal__revision_id": 5480,
      "langcode": "en",
      "revision_created": "2021-12-02T07:49:11+00:00",
      "revision_log_message": null,
      "enabled": true,
      "title": "Home",
      "description": null,
      "menu_name": "menu-main-en",
      "link": {
        "uri": "route:<front>",
        "url": "/en",
        "title": null,
        "options": []
      },
      "external": true,
      "rediscover": false,
      "weight": -50,
      "expanded": false,
      "parent": null,
      "changed": "2021-12-02T07:49:11+00:00",
      "default_langcode": true,
      "revision_translation_affected": true,
      "view_mode": null,
      "content_translation_source": "und",
      "content_translation_outdated": false,
      "content_translation_status": true,
      "content_translation_created": "2021-12-02T07:49:11+00:00"
    },
    "relationships": {
      "bundle": {
        "data": {
          "type": "menu--menu",
          "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
        },
        "links": {
          "related": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/28293e12-9d37-4389-a2aa-472d50e07dc4/bundle"
          },
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/28293e12-9d37-4389-a2aa-472d50e07dc4/relationships/bundle"
          }
        }
      },
      "revision_user": {
        "data": null,
        "links": {
          "related": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/28293e12-9d37-4389-a2aa-472d50e07dc4/revision_user"
          },
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/28293e12-9d37-4389-a2aa-472d50e07dc4/relationships/revision_user"
          }
        }
      },
      "content_translation_uid": {
        "data": {
          "type": "user--user",
          "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
        },
        "links": {
          "related": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/28293e12-9d37-4389-a2aa-472d50e07dc4/content_translation_uid"
          },
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/28293e12-9d37-4389-a2aa-472d50e07dc4/relationships/content_translation_uid"
          }
        }
      }
    },
    "children": []
  },
  {
    "type": "menu_link_content--menu-main-en",
    "id": "1ab0db3c-9db2-4309-96a1-20d60509939b",
    "links": {
      "self": {
        "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/1ab0db3c-9db2-4309-96a1-20d60509939b"
      }
    },
    "attributes": {
      "drupal_internal__id": 5466,
      "drupal_internal__revision_id": 5481,
      "langcode": "en",
      "revision_created": "2021-12-02T07:49:11+00:00",
      "revision_log_message": null,
      "enabled": true,
      "title": "Products",
      "description": null,
      "menu_name": "menu-main-en",
      "link": {
        "uri": "route:<nolink>",
        "url": "",
        "title": null,
        "options": []
      },
      "external": false,
      "rediscover": false,
      "weight": -49,
      "expanded": true,
      "parent": null,
      "changed": "2021-12-02T07:49:11+00:00",
      "default_langcode": true,
      "revision_translation_affected": true,
      "view_mode": null,
      "content_translation_source": "und",
      "content_translation_outdated": false,
      "content_translation_status": true,
      "content_translation_created": "2021-12-02T07:49:11+00:00"
    },
    "relationships": {
      "bundle": {
        "data": {
          "type": "menu--menu",
          "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
        },
        "links": {
          "related": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/1ab0db3c-9db2-4309-96a1-20d60509939b/bundle"
          },
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/1ab0db3c-9db2-4309-96a1-20d60509939b/relationships/bundle"
          }
        }
      },
      "revision_user": {
        "data": null,
        "links": {
          "related": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/1ab0db3c-9db2-4309-96a1-20d60509939b/revision_user"
          },
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/1ab0db3c-9db2-4309-96a1-20d60509939b/relationships/revision_user"
          }
        }
      },
      "content_translation_uid": {
        "data": {
          "type": "user--user",
          "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
        },
        "links": {
          "related": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/1ab0db3c-9db2-4309-96a1-20d60509939b/content_translation_uid"
          },
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/1ab0db3c-9db2-4309-96a1-20d60509939b/relationships/content_translation_uid"
          }
        }
      }
    },
    "children": [
      {
        "type": "menu_link_content--menu-main-en",
        "id": "67223d6b-f699-4d68-ab38-3ddc3765c6f8",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/67223d6b-f699-4d68-ab38-3ddc3765c6f8"
          }
        },
        "attributes": {
          "drupal_internal__id": 5612,
          "drupal_internal__revision_id": 5627,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "HMI",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "route:<nolink>",
            "url": "",
            "title": null,
            "options": []
          },
          "external": false,
          "rediscover": false,
          "weight": -50,
          "expanded": true,
          "parent": "menu_link_content:1ab0db3c-9db2-4309-96a1-20d60509939b",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/67223d6b-f699-4d68-ab38-3ddc3765c6f8/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/67223d6b-f699-4d68-ab38-3ddc3765c6f8/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/67223d6b-f699-4d68-ab38-3ddc3765c6f8/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/67223d6b-f699-4d68-ab38-3ddc3765c6f8/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/67223d6b-f699-4d68-ab38-3ddc3765c6f8/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/67223d6b-f699-4d68-ab38-3ddc3765c6f8/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": []
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "16b85dfd-727a-4271-af08-2bc57f92bc26",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/16b85dfd-727a-4271-af08-2bc57f92bc26"
          }
        },
        "attributes": {
          "drupal_internal__id": 5613,
          "drupal_internal__revision_id": 5628,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "HMI + Control",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "route:<nolink>",
            "url": "",
            "title": null,
            "options": []
          },
          "external": false,
          "rediscover": false,
          "weight": -49,
          "expanded": true,
          "parent": "menu_link_content:1ab0db3c-9db2-4309-96a1-20d60509939b",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/16b85dfd-727a-4271-af08-2bc57f92bc26/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/16b85dfd-727a-4271-af08-2bc57f92bc26/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/16b85dfd-727a-4271-af08-2bc57f92bc26/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/16b85dfd-727a-4271-af08-2bc57f92bc26/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/16b85dfd-727a-4271-af08-2bc57f92bc26/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/16b85dfd-727a-4271-af08-2bc57f92bc26/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": []
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "aab788d9-dbd0-4866-9081-d5df6d3969e3",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/aab788d9-dbd0-4866-9081-d5df6d3969e3"
          }
        },
        "attributes": {
          "drupal_internal__id": 5506,
          "drupal_internal__revision_id": 5521,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "New Product Information",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "route:<front>",
            "url": "/en",
            "title": null,
            "options": []
          },
          "external": false,
          "rediscover": false,
          "weight": -48,
          "expanded": true,
          "parent": "menu_link_content:1ab0db3c-9db2-4309-96a1-20d60509939b",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/aab788d9-dbd0-4866-9081-d5df6d3969e3/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/aab788d9-dbd0-4866-9081-d5df6d3969e3/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/aab788d9-dbd0-4866-9081-d5df6d3969e3/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/aab788d9-dbd0-4866-9081-d5df6d3969e3/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/aab788d9-dbd0-4866-9081-d5df6d3969e3/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/aab788d9-dbd0-4866-9081-d5df6d3969e3/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": []
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "764ad040-f377-4c06-865e-a9811b375dc1",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/764ad040-f377-4c06-865e-a9811b375dc1"
          }
        },
        "attributes": {
          "drupal_internal__id": 5611,
          "drupal_internal__revision_id": 5626,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Industrial PC (IPC)",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "route:<nolink>",
            "url": "",
            "title": null,
            "options": []
          },
          "external": false,
          "rediscover": false,
          "weight": -48,
          "expanded": true,
          "parent": "menu_link_content:1ab0db3c-9db2-4309-96a1-20d60509939b",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/764ad040-f377-4c06-865e-a9811b375dc1/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/764ad040-f377-4c06-865e-a9811b375dc1/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/764ad040-f377-4c06-865e-a9811b375dc1/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/764ad040-f377-4c06-865e-a9811b375dc1/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/764ad040-f377-4c06-865e-a9811b375dc1/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/764ad040-f377-4c06-865e-a9811b375dc1/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": []
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "580d00e9-72b1-4cb7-8029-a2f9eb370af7",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/580d00e9-72b1-4cb7-8029-a2f9eb370af7"
          }
        },
        "attributes": {
          "drupal_internal__id": 6152,
          "drupal_internal__revision_id": 6167,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Web HMI",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "route:<nolink>",
            "url": "",
            "title": null,
            "options": []
          },
          "external": false,
          "rediscover": false,
          "weight": -47,
          "expanded": true,
          "parent": "menu_link_content:1ab0db3c-9db2-4309-96a1-20d60509939b",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/580d00e9-72b1-4cb7-8029-a2f9eb370af7/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/580d00e9-72b1-4cb7-8029-a2f9eb370af7/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/580d00e9-72b1-4cb7-8029-a2f9eb370af7/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/580d00e9-72b1-4cb7-8029-a2f9eb370af7/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/580d00e9-72b1-4cb7-8029-a2f9eb370af7/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/580d00e9-72b1-4cb7-8029-a2f9eb370af7/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": []
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "13f264fa-f953-4bfe-8909-7213b8077ffc",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/13f264fa-f953-4bfe-8909-7213b8077ffc"
          }
        },
        "attributes": {
          "drupal_internal__id": 5614,
          "drupal_internal__revision_id": 5629,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Flat Panel Monitors",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "route:<nolink>",
            "url": "",
            "title": null,
            "options": []
          },
          "external": false,
          "rediscover": false,
          "weight": -46,
          "expanded": true,
          "parent": "menu_link_content:1ab0db3c-9db2-4309-96a1-20d60509939b",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/13f264fa-f953-4bfe-8909-7213b8077ffc/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/13f264fa-f953-4bfe-8909-7213b8077ffc/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/13f264fa-f953-4bfe-8909-7213b8077ffc/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/13f264fa-f953-4bfe-8909-7213b8077ffc/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/13f264fa-f953-4bfe-8909-7213b8077ffc/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/13f264fa-f953-4bfe-8909-7213b8077ffc/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": []
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "e10350a6-e463-4168-8a10-9f2eabe201e5",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/e10350a6-e463-4168-8a10-9f2eabe201e5"
          }
        },
        "attributes": {
          "drupal_internal__id": 5467,
          "drupal_internal__revision_id": 5482,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Software",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "route:<nolink>",
            "url": "",
            "title": null,
            "options": []
          },
          "external": false,
          "rediscover": false,
          "weight": -45,
          "expanded": true,
          "parent": "menu_link_content:1ab0db3c-9db2-4309-96a1-20d60509939b",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/e10350a6-e463-4168-8a10-9f2eabe201e5/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/e10350a6-e463-4168-8a10-9f2eabe201e5/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/e10350a6-e463-4168-8a10-9f2eabe201e5/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/e10350a6-e463-4168-8a10-9f2eabe201e5/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/e10350a6-e463-4168-8a10-9f2eabe201e5/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/e10350a6-e463-4168-8a10-9f2eabe201e5/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": []
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "2d40c402-7b28-4d4c-8fa7-fdc0912d7a76",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/2d40c402-7b28-4d4c-8fa7-fdc0912d7a76"
          }
        },
        "attributes": {
          "drupal_internal__id": 5610,
          "drupal_internal__revision_id": 5625,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Data Collection Devices",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "route:<nolink>",
            "url": "",
            "title": null,
            "options": []
          },
          "external": false,
          "rediscover": false,
          "weight": -44,
          "expanded": true,
          "parent": "menu_link_content:1ab0db3c-9db2-4309-96a1-20d60509939b",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/2d40c402-7b28-4d4c-8fa7-fdc0912d7a76/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/2d40c402-7b28-4d4c-8fa7-fdc0912d7a76/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/2d40c402-7b28-4d4c-8fa7-fdc0912d7a76/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/2d40c402-7b28-4d4c-8fa7-fdc0912d7a76/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/2d40c402-7b28-4d4c-8fa7-fdc0912d7a76/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/2d40c402-7b28-4d4c-8fa7-fdc0912d7a76/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": []
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "d7e987b2-56a7-44f6-8314-3cac6fc2a9c7",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/d7e987b2-56a7-44f6-8314-3cac6fc2a9c7"
          }
        },
        "attributes": {
          "drupal_internal__id": 5615,
          "drupal_internal__revision_id": 5630,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Other Hardware",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "route:<nolink>",
            "url": "",
            "title": null,
            "options": []
          },
          "external": false,
          "rediscover": false,
          "weight": -43,
          "expanded": true,
          "parent": "menu_link_content:1ab0db3c-9db2-4309-96a1-20d60509939b",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/d7e987b2-56a7-44f6-8314-3cac6fc2a9c7/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/d7e987b2-56a7-44f6-8314-3cac6fc2a9c7/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/d7e987b2-56a7-44f6-8314-3cac6fc2a9c7/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/d7e987b2-56a7-44f6-8314-3cac6fc2a9c7/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/d7e987b2-56a7-44f6-8314-3cac6fc2a9c7/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/d7e987b2-56a7-44f6-8314-3cac6fc2a9c7/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": []
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "ec04fc5c-7395-4a7c-a8d5-073d563199e4",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/ec04fc5c-7395-4a7c-a8d5-073d563199e4"
          }
        },
        "attributes": {
          "drupal_internal__id": 5797,
          "drupal_internal__revision_id": 5812,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Recommended Substitute Products",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "http://www.pro-face.com/otasuke/replace_search/contents_replace_e.html",
            "url": "http://www.pro-face.com/otasuke/replace_search/contents_replace_e.html",
            "title": null,
            "options": []
          },
          "external": true,
          "rediscover": false,
          "weight": -41,
          "expanded": false,
          "parent": "menu_link_content:1ab0db3c-9db2-4309-96a1-20d60509939b",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/ec04fc5c-7395-4a7c-a8d5-073d563199e4/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/ec04fc5c-7395-4a7c-a8d5-073d563199e4/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/ec04fc5c-7395-4a7c-a8d5-073d563199e4/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/ec04fc5c-7395-4a7c-a8d5-073d563199e4/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/ec04fc5c-7395-4a7c-a8d5-073d563199e4/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/ec04fc5c-7395-4a7c-a8d5-073d563199e4/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": []
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "2cec5a17-655b-4360-ba38-024e7ca07a6e",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/2cec5a17-655b-4360-ba38-024e7ca07a6e"
          }
        },
        "attributes": {
          "drupal_internal__id": 5816,
          "drupal_internal__revision_id": 5831,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Customization and Services",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "route:<nolink>",
            "url": "",
            "title": null,
            "options": []
          },
          "external": false,
          "rediscover": false,
          "weight": -40,
          "expanded": true,
          "parent": "menu_link_content:1ab0db3c-9db2-4309-96a1-20d60509939b",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/2cec5a17-655b-4360-ba38-024e7ca07a6e/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/2cec5a17-655b-4360-ba38-024e7ca07a6e/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/2cec5a17-655b-4360-ba38-024e7ca07a6e/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/2cec5a17-655b-4360-ba38-024e7ca07a6e/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/2cec5a17-655b-4360-ba38-024e7ca07a6e/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/2cec5a17-655b-4360-ba38-024e7ca07a6e/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": []
      }
    ]
  },
  {
    "type": "menu_link_content--menu-main-en",
    "id": "9cec4ea8-ade6-49ff-b55c-3df1cf8d1f9b",
    "links": {
      "self": {
        "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/9cec4ea8-ade6-49ff-b55c-3df1cf8d1f9b"
      }
    },
    "attributes": {
      "drupal_internal__id": 5473,
      "drupal_internal__revision_id": 5488,
      "langcode": "en",
      "revision_created": "2021-12-02T07:49:11+00:00",
      "revision_log_message": null,
      "enabled": true,
      "title": "Solution",
      "description": null,
      "menu_name": "menu-main-en",
      "link": {
        "uri": "route:<nolink>",
        "url": "",
        "title": null,
        "options": []
      },
      "external": false,
      "rediscover": false,
      "weight": -48,
      "expanded": true,
      "parent": null,
      "changed": "2021-12-02T07:49:11+00:00",
      "default_langcode": true,
      "revision_translation_affected": true,
      "view_mode": null,
      "content_translation_source": "und",
      "content_translation_outdated": false,
      "content_translation_status": true,
      "content_translation_created": "2021-12-02T07:49:11+00:00"
    },
    "relationships": {
      "bundle": {
        "data": {
          "type": "menu--menu",
          "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
        },
        "links": {
          "related": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/9cec4ea8-ade6-49ff-b55c-3df1cf8d1f9b/bundle"
          },
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/9cec4ea8-ade6-49ff-b55c-3df1cf8d1f9b/relationships/bundle"
          }
        }
      },
      "revision_user": {
        "data": null,
        "links": {
          "related": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/9cec4ea8-ade6-49ff-b55c-3df1cf8d1f9b/revision_user"
          },
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/9cec4ea8-ade6-49ff-b55c-3df1cf8d1f9b/relationships/revision_user"
          }
        }
      },
      "content_translation_uid": {
        "data": {
          "type": "user--user",
          "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
        },
        "links": {
          "related": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/9cec4ea8-ade6-49ff-b55c-3df1cf8d1f9b/content_translation_uid"
          },
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/9cec4ea8-ade6-49ff-b55c-3df1cf8d1f9b/relationships/content_translation_uid"
          }
        }
      }
    },
    "children": []
  },
  {
    "type": "menu_link_content--menu-main-en",
    "id": "6f9f6aa4-fa77-406e-8c14-8550f0506b0d",
    "links": {
      "self": {
        "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/6f9f6aa4-fa77-406e-8c14-8550f0506b0d"
      }
    },
    "attributes": {
      "drupal_internal__id": 5477,
      "drupal_internal__revision_id": 5492,
      "langcode": "en",
      "revision_created": "2021-12-02T07:49:11+00:00",
      "revision_log_message": null,
      "enabled": true,
      "title": "Support",
      "description": null,
      "menu_name": "menu-main-en",
      "link": {
        "uri": "route:<nolink>",
        "url": "",
        "title": null,
        "options": []
      },
      "external": false,
      "rediscover": false,
      "weight": -47,
      "expanded": true,
      "parent": null,
      "changed": "2021-12-02T07:49:11+00:00",
      "default_langcode": true,
      "revision_translation_affected": true,
      "view_mode": null,
      "content_translation_source": "und",
      "content_translation_outdated": false,
      "content_translation_status": true,
      "content_translation_created": "2021-12-02T07:49:11+00:00"
    },
    "relationships": {
      "bundle": {
        "data": {
          "type": "menu--menu",
          "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
        },
        "links": {
          "related": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/6f9f6aa4-fa77-406e-8c14-8550f0506b0d/bundle"
          },
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/6f9f6aa4-fa77-406e-8c14-8550f0506b0d/relationships/bundle"
          }
        }
      },
      "revision_user": {
        "data": null,
        "links": {
          "related": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/6f9f6aa4-fa77-406e-8c14-8550f0506b0d/revision_user"
          },
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/6f9f6aa4-fa77-406e-8c14-8550f0506b0d/relationships/revision_user"
          }
        }
      },
      "content_translation_uid": {
        "data": {
          "type": "user--user",
          "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
        },
        "links": {
          "related": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/6f9f6aa4-fa77-406e-8c14-8550f0506b0d/content_translation_uid"
          },
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/6f9f6aa4-fa77-406e-8c14-8550f0506b0d/relationships/content_translation_uid"
          }
        }
      }
    },
    "children": [
      {
        "type": "menu_link_content--menu-main-en",
        "id": "8901214a-cf0a-4760-b6d1-c484139281e7",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/8901214a-cf0a-4760-b6d1-c484139281e7"
          }
        },
        "attributes": {
          "drupal_internal__id": 5898,
          "drupal_internal__revision_id": 5913,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Support Index (Otasuke Pro!)",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "https://www.pro-face.com/otasuke/index.html",
            "url": "https://www.pro-face.com/otasuke/index.html",
            "title": null,
            "options": []
          },
          "external": true,
          "rediscover": false,
          "weight": -50,
          "expanded": false,
          "parent": "menu_link_content:6f9f6aa4-fa77-406e-8c14-8550f0506b0d",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/8901214a-cf0a-4760-b6d1-c484139281e7/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/8901214a-cf0a-4760-b6d1-c484139281e7/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/8901214a-cf0a-4760-b6d1-c484139281e7/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/8901214a-cf0a-4760-b6d1-c484139281e7/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/8901214a-cf0a-4760-b6d1-c484139281e7/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/8901214a-cf0a-4760-b6d1-c484139281e7/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": []
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "f893f2e3-93a7-4d1a-8343-e7d1f097b113",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f893f2e3-93a7-4d1a-8343-e7d1f097b113"
          }
        },
        "attributes": {
          "drupal_internal__id": 5478,
          "drupal_internal__revision_id": 5493,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Frequently Asked Questions",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "route:<nolink>",
            "url": "",
            "title": null,
            "options": []
          },
          "external": false,
          "rediscover": false,
          "weight": -48,
          "expanded": true,
          "parent": "menu_link_content:6f9f6aa4-fa77-406e-8c14-8550f0506b0d",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f893f2e3-93a7-4d1a-8343-e7d1f097b113/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f893f2e3-93a7-4d1a-8343-e7d1f097b113/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f893f2e3-93a7-4d1a-8343-e7d1f097b113/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f893f2e3-93a7-4d1a-8343-e7d1f097b113/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f893f2e3-93a7-4d1a-8343-e7d1f097b113/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f893f2e3-93a7-4d1a-8343-e7d1f097b113/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": [
          {
            "type": "menu_link_content--menu-main-en",
            "id": "0a9196d2-a7b9-4a30-806b-02d66f8c21b5",
            "links": {
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/0a9196d2-a7b9-4a30-806b-02d66f8c21b5"
              }
            },
            "attributes": {
              "drupal_internal__id": 5600,
              "drupal_internal__revision_id": 5615,
              "langcode": "en",
              "revision_created": "2021-12-02T07:49:11+00:00",
              "revision_log_message": null,
              "enabled": true,
              "title": "Pro-face Remote HMI Q&A",
              "description": null,
              "menu_name": "menu-main-en",
              "link": {
                "uri": "https://www.pro-face.com/otasuke/qa/remotehmi/",
                "url": "https://www.pro-face.com/otasuke/qa/remotehmi/",
                "title": null,
                "options": []
              },
              "external": true,
              "rediscover": false,
              "weight": -49,
              "expanded": true,
              "parent": "menu_link_content:f893f2e3-93a7-4d1a-8343-e7d1f097b113",
              "changed": "2021-12-02T07:49:11+00:00",
              "default_langcode": true,
              "revision_translation_affected": true,
              "view_mode": null,
              "content_translation_source": "und",
              "content_translation_outdated": false,
              "content_translation_status": true,
              "content_translation_created": "2021-12-02T07:49:11+00:00"
            },
            "relationships": {
              "bundle": {
                "data": {
                  "type": "menu--menu",
                  "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/0a9196d2-a7b9-4a30-806b-02d66f8c21b5/bundle"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/0a9196d2-a7b9-4a30-806b-02d66f8c21b5/relationships/bundle"
                  }
                }
              },
              "revision_user": {
                "data": null,
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/0a9196d2-a7b9-4a30-806b-02d66f8c21b5/revision_user"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/0a9196d2-a7b9-4a30-806b-02d66f8c21b5/relationships/revision_user"
                  }
                }
              },
              "content_translation_uid": {
                "data": {
                  "type": "user--user",
                  "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/0a9196d2-a7b9-4a30-806b-02d66f8c21b5/content_translation_uid"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/0a9196d2-a7b9-4a30-806b-02d66f8c21b5/relationships/content_translation_uid"
                  }
                }
              }
            }
          }
        ]
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "86a5419f-464e-4ef1-9cba-bd20eabe9df2",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/86a5419f-464e-4ef1-9cba-bd20eabe9df2"
          }
        },
        "attributes": {
          "drupal_internal__id": 5793,
          "drupal_internal__revision_id": 5808,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Recommended Substitute Products",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "https://www.pro-face.com/otasuke/replace_search/contents_replace_e.html",
            "url": "https://www.pro-face.com/otasuke/replace_search/contents_replace_e.html",
            "title": null,
            "options": []
          },
          "external": true,
          "rediscover": false,
          "weight": -44,
          "expanded": false,
          "parent": "menu_link_content:6f9f6aa4-fa77-406e-8c14-8550f0506b0d",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/86a5419f-464e-4ef1-9cba-bd20eabe9df2/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/86a5419f-464e-4ef1-9cba-bd20eabe9df2/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/86a5419f-464e-4ef1-9cba-bd20eabe9df2/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/86a5419f-464e-4ef1-9cba-bd20eabe9df2/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/86a5419f-464e-4ef1-9cba-bd20eabe9df2/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/86a5419f-464e-4ef1-9cba-bd20eabe9df2/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": []
      }
    ]
  },
  {
    "type": "menu_link_content--menu-main-en",
    "id": "739451a9-8fc0-4fa8-88fd-249ff28fcda3",
    "links": {
      "self": {
        "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/739451a9-8fc0-4fa8-88fd-249ff28fcda3"
      }
    },
    "attributes": {
      "drupal_internal__id": 5499,
      "drupal_internal__revision_id": 5514,
      "langcode": "en",
      "revision_created": "2021-12-02T07:49:11+00:00",
      "revision_log_message": null,
      "enabled": true,
      "title": "Downloads",
      "description": null,
      "menu_name": "menu-main-en",
      "link": {
        "uri": "route:<nolink>",
        "url": "",
        "title": null,
        "options": []
      },
      "external": false,
      "rediscover": false,
      "weight": -44,
      "expanded": true,
      "parent": null,
      "changed": "2021-12-02T07:49:11+00:00",
      "default_langcode": true,
      "revision_translation_affected": true,
      "view_mode": null,
      "content_translation_source": "und",
      "content_translation_outdated": false,
      "content_translation_status": true,
      "content_translation_created": "2021-12-02T07:49:11+00:00"
    },
    "relationships": {
      "bundle": {
        "data": {
          "type": "menu--menu",
          "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
        },
        "links": {
          "related": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/739451a9-8fc0-4fa8-88fd-249ff28fcda3/bundle"
          },
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/739451a9-8fc0-4fa8-88fd-249ff28fcda3/relationships/bundle"
          }
        }
      },
      "revision_user": {
        "data": null,
        "links": {
          "related": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/739451a9-8fc0-4fa8-88fd-249ff28fcda3/revision_user"
          },
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/739451a9-8fc0-4fa8-88fd-249ff28fcda3/relationships/revision_user"
          }
        }
      },
      "content_translation_uid": {
        "data": {
          "type": "user--user",
          "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
        },
        "links": {
          "related": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/739451a9-8fc0-4fa8-88fd-249ff28fcda3/content_translation_uid"
          },
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/739451a9-8fc0-4fa8-88fd-249ff28fcda3/relationships/content_translation_uid"
          }
        }
      }
    },
    "children": [
      {
        "type": "menu_link_content--menu-main-en",
        "id": "f0a2cc7c-9788-44a3-80ac-1a9302804976",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f0a2cc7c-9788-44a3-80ac-1a9302804976"
          }
        },
        "attributes": {
          "drupal_internal__id": 5500,
          "drupal_internal__revision_id": 5515,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Advanced & Keyword Search",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "route:<front>",
            "url": "/en",
            "title": null,
            "options": []
          },
          "external": false,
          "rediscover": false,
          "weight": -49,
          "expanded": true,
          "parent": "menu_link_content:739451a9-8fc0-4fa8-88fd-249ff28fcda3",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f0a2cc7c-9788-44a3-80ac-1a9302804976/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f0a2cc7c-9788-44a3-80ac-1a9302804976/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f0a2cc7c-9788-44a3-80ac-1a9302804976/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f0a2cc7c-9788-44a3-80ac-1a9302804976/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f0a2cc7c-9788-44a3-80ac-1a9302804976/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f0a2cc7c-9788-44a3-80ac-1a9302804976/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": []
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "929d43a0-f2b5-49dc-ab7a-176bdf9447b6",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/929d43a0-f2b5-49dc-ab7a-176bdf9447b6"
          }
        },
        "attributes": {
          "drupal_internal__id": 5609,
          "drupal_internal__revision_id": 5624,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Export Documents",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "https://www.pro-face.com/otasuke/download/ear/",
            "url": "https://www.pro-face.com/otasuke/download/ear/",
            "title": null,
            "options": []
          },
          "external": true,
          "rediscover": false,
          "weight": -45,
          "expanded": true,
          "parent": "menu_link_content:739451a9-8fc0-4fa8-88fd-249ff28fcda3",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/929d43a0-f2b5-49dc-ab7a-176bdf9447b6/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/929d43a0-f2b5-49dc-ab7a-176bdf9447b6/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/929d43a0-f2b5-49dc-ab7a-176bdf9447b6/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/929d43a0-f2b5-49dc-ab7a-176bdf9447b6/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/929d43a0-f2b5-49dc-ab7a-176bdf9447b6/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/929d43a0-f2b5-49dc-ab7a-176bdf9447b6/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": []
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "77a05a50-f101-46b8-8e30-cdf63f6f92f7",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/77a05a50-f101-46b8-8e30-cdf63f6f92f7"
          }
        },
        "attributes": {
          "drupal_internal__id": 5502,
          "drupal_internal__revision_id": 5517,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Manuals",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "route:<front>",
            "url": "/en",
            "title": null,
            "options": []
          },
          "external": false,
          "rediscover": false,
          "weight": -45,
          "expanded": true,
          "parent": "menu_link_content:739451a9-8fc0-4fa8-88fd-249ff28fcda3",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/77a05a50-f101-46b8-8e30-cdf63f6f92f7/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/77a05a50-f101-46b8-8e30-cdf63f6f92f7/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/77a05a50-f101-46b8-8e30-cdf63f6f92f7/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/77a05a50-f101-46b8-8e30-cdf63f6f92f7/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/77a05a50-f101-46b8-8e30-cdf63f6f92f7/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/77a05a50-f101-46b8-8e30-cdf63f6f92f7/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": []
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "680e5914-8a27-426b-b7ff-304cf95a6bd2",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/680e5914-8a27-426b-b7ff-304cf95a6bd2"
          }
        },
        "attributes": {
          "drupal_internal__id": 5799,
          "drupal_internal__revision_id": 5814,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Recommended Substitute Products",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "https://www.pro-face.com/otasuke/replace_search/contents_replace_e.html",
            "url": "https://www.pro-face.com/otasuke/replace_search/contents_replace_e.html",
            "title": null,
            "options": []
          },
          "external": true,
          "rediscover": false,
          "weight": -43,
          "expanded": true,
          "parent": "menu_link_content:739451a9-8fc0-4fa8-88fd-249ff28fcda3",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/680e5914-8a27-426b-b7ff-304cf95a6bd2/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/680e5914-8a27-426b-b7ff-304cf95a6bd2/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/680e5914-8a27-426b-b7ff-304cf95a6bd2/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/680e5914-8a27-426b-b7ff-304cf95a6bd2/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/680e5914-8a27-426b-b7ff-304cf95a6bd2/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/680e5914-8a27-426b-b7ff-304cf95a6bd2/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": []
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "c542677a-82e8-49e1-b818-aa11688d349f",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/c542677a-82e8-49e1-b818-aa11688d349f"
          }
        },
        "attributes": {
          "drupal_internal__id": 5503,
          "drupal_internal__revision_id": 5518,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Catalogs",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "route:<front>",
            "url": "/en",
            "title": null,
            "options": []
          },
          "external": false,
          "rediscover": false,
          "weight": -40,
          "expanded": true,
          "parent": "menu_link_content:739451a9-8fc0-4fa8-88fd-249ff28fcda3",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/c542677a-82e8-49e1-b818-aa11688d349f/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/c542677a-82e8-49e1-b818-aa11688d349f/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/c542677a-82e8-49e1-b818-aa11688d349f/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/c542677a-82e8-49e1-b818-aa11688d349f/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/c542677a-82e8-49e1-b818-aa11688d349f/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/c542677a-82e8-49e1-b818-aa11688d349f/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": []
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "edce464b-0d28-4562-a901-2b562d11616c",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/edce464b-0d28-4562-a901-2b562d11616c"
          }
        },
        "attributes": {
          "drupal_internal__id": 5504,
          "drupal_internal__revision_id": 5519,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Updates & Drivers",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "route:<front>",
            "url": "/en",
            "title": null,
            "options": []
          },
          "external": false,
          "rediscover": false,
          "weight": -35,
          "expanded": true,
          "parent": "menu_link_content:739451a9-8fc0-4fa8-88fd-249ff28fcda3",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/edce464b-0d28-4562-a901-2b562d11616c/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/edce464b-0d28-4562-a901-2b562d11616c/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/edce464b-0d28-4562-a901-2b562d11616c/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/edce464b-0d28-4562-a901-2b562d11616c/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/edce464b-0d28-4562-a901-2b562d11616c/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/edce464b-0d28-4562-a901-2b562d11616c/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": []
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "d97d27dc-6e8a-4d8d-ab81-13089ed29783",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/d97d27dc-6e8a-4d8d-ab81-13089ed29783"
          }
        },
        "attributes": {
          "drupal_internal__id": 5505,
          "drupal_internal__revision_id": 5520,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Device Connection Samples",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "route:<front>",
            "url": "/en",
            "title": null,
            "options": []
          },
          "external": false,
          "rediscover": false,
          "weight": -33,
          "expanded": true,
          "parent": "menu_link_content:739451a9-8fc0-4fa8-88fd-249ff28fcda3",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/d97d27dc-6e8a-4d8d-ab81-13089ed29783/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/d97d27dc-6e8a-4d8d-ab81-13089ed29783/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/d97d27dc-6e8a-4d8d-ab81-13089ed29783/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/d97d27dc-6e8a-4d8d-ab81-13089ed29783/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/d97d27dc-6e8a-4d8d-ab81-13089ed29783/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/d97d27dc-6e8a-4d8d-ab81-13089ed29783/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": []
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "3eccb476-7f32-40b3-9644-e2f112a216ad",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/3eccb476-7f32-40b3-9644-e2f112a216ad"
          }
        },
        "attributes": {
          "drupal_internal__id": 5501,
          "drupal_internal__revision_id": 5516,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Export Documents",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "route:<front>",
            "url": "/en",
            "title": null,
            "options": []
          },
          "external": false,
          "rediscover": false,
          "weight": -16,
          "expanded": true,
          "parent": "menu_link_content:739451a9-8fc0-4fa8-88fd-249ff28fcda3",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/3eccb476-7f32-40b3-9644-e2f112a216ad/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/3eccb476-7f32-40b3-9644-e2f112a216ad/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/3eccb476-7f32-40b3-9644-e2f112a216ad/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/3eccb476-7f32-40b3-9644-e2f112a216ad/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/3eccb476-7f32-40b3-9644-e2f112a216ad/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/3eccb476-7f32-40b3-9644-e2f112a216ad/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": []
      }
    ]
  },
  {
    "type": "menu_link_content--menu-main-en",
    "id": "c1489c7c-3a43-4e2c-8e00-2931c6f68ae5",
    "links": {
      "self": {
        "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/c1489c7c-3a43-4e2c-8e00-2931c6f68ae5"
      }
    },
    "attributes": {
      "drupal_internal__id": 5483,
      "drupal_internal__revision_id": 5498,
      "langcode": "en",
      "revision_created": "2021-12-02T07:49:11+00:00",
      "revision_log_message": null,
      "enabled": true,
      "title": "About Pro-face",
      "description": null,
      "menu_name": "menu-main-en",
      "link": {
        "uri": "route:<nolink>",
        "url": "",
        "title": null,
        "options": []
      },
      "external": false,
      "rediscover": false,
      "weight": -40,
      "expanded": true,
      "parent": null,
      "changed": "2021-12-02T07:49:11+00:00",
      "default_langcode": true,
      "revision_translation_affected": true,
      "view_mode": null,
      "content_translation_source": "und",
      "content_translation_outdated": false,
      "content_translation_status": true,
      "content_translation_created": "2021-12-02T07:49:11+00:00"
    },
    "relationships": {
      "bundle": {
        "data": {
          "type": "menu--menu",
          "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
        },
        "links": {
          "related": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/c1489c7c-3a43-4e2c-8e00-2931c6f68ae5/bundle"
          },
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/c1489c7c-3a43-4e2c-8e00-2931c6f68ae5/relationships/bundle"
          }
        }
      },
      "revision_user": {
        "data": null,
        "links": {
          "related": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/c1489c7c-3a43-4e2c-8e00-2931c6f68ae5/revision_user"
          },
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/c1489c7c-3a43-4e2c-8e00-2931c6f68ae5/relationships/revision_user"
          }
        }
      },
      "content_translation_uid": {
        "data": {
          "type": "user--user",
          "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
        },
        "links": {
          "related": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/c1489c7c-3a43-4e2c-8e00-2931c6f68ae5/content_translation_uid"
          },
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/c1489c7c-3a43-4e2c-8e00-2931c6f68ae5/relationships/content_translation_uid"
          }
        }
      }
    },
    "children": [
      {
        "type": "menu_link_content--menu-main-en",
        "id": "915cba59-3524-463c-9fd1-3a1e8b7e2a90",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/915cba59-3524-463c-9fd1-3a1e8b7e2a90"
          }
        },
        "attributes": {
          "drupal_internal__id": 5484,
          "drupal_internal__revision_id": 5499,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Company Information",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "route:<front>",
            "url": "/en",
            "title": null,
            "options": []
          },
          "external": false,
          "rediscover": false,
          "weight": -39,
          "expanded": true,
          "parent": "menu_link_content:c1489c7c-3a43-4e2c-8e00-2931c6f68ae5",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/915cba59-3524-463c-9fd1-3a1e8b7e2a90/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/915cba59-3524-463c-9fd1-3a1e8b7e2a90/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/915cba59-3524-463c-9fd1-3a1e8b7e2a90/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/915cba59-3524-463c-9fd1-3a1e8b7e2a90/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/915cba59-3524-463c-9fd1-3a1e8b7e2a90/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/915cba59-3524-463c-9fd1-3a1e8b7e2a90/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": [
          {
            "type": "menu_link_content--menu-main-en",
            "id": "e1ac2816-833f-48bf-85f2-b381b78f59cc",
            "links": {
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/e1ac2816-833f-48bf-85f2-b381b78f59cc"
              }
            },
            "attributes": {
              "drupal_internal__id": 5488,
              "drupal_internal__revision_id": 5503,
              "langcode": "en",
              "revision_created": "2021-12-02T07:49:11+00:00",
              "revision_log_message": null,
              "enabled": true,
              "title": "Company Profile",
              "description": null,
              "menu_name": "menu-main-en",
              "link": {
                "uri": "route:<front>",
                "url": "/en",
                "title": null,
                "options": []
              },
              "external": false,
              "rediscover": false,
              "weight": -49,
              "expanded": true,
              "parent": "menu_link_content:915cba59-3524-463c-9fd1-3a1e8b7e2a90",
              "changed": "2021-12-02T07:49:11+00:00",
              "default_langcode": true,
              "revision_translation_affected": true,
              "view_mode": null,
              "content_translation_source": "und",
              "content_translation_outdated": false,
              "content_translation_status": true,
              "content_translation_created": "2021-12-02T07:49:11+00:00"
            },
            "relationships": {
              "bundle": {
                "data": {
                  "type": "menu--menu",
                  "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/e1ac2816-833f-48bf-85f2-b381b78f59cc/bundle"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/e1ac2816-833f-48bf-85f2-b381b78f59cc/relationships/bundle"
                  }
                }
              },
              "revision_user": {
                "data": null,
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/e1ac2816-833f-48bf-85f2-b381b78f59cc/revision_user"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/e1ac2816-833f-48bf-85f2-b381b78f59cc/relationships/revision_user"
                  }
                }
              },
              "content_translation_uid": {
                "data": {
                  "type": "user--user",
                  "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/e1ac2816-833f-48bf-85f2-b381b78f59cc/content_translation_uid"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/e1ac2816-833f-48bf-85f2-b381b78f59cc/relationships/content_translation_uid"
                  }
                }
              }
            }
          },
          {
            "type": "menu_link_content--menu-main-en",
            "id": "5f3ade17-c144-4a6e-af41-1f44f43b1292",
            "links": {
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/5f3ade17-c144-4a6e-af41-1f44f43b1292"
              }
            },
            "attributes": {
              "drupal_internal__id": 5489,
              "drupal_internal__revision_id": 5504,
              "langcode": "en",
              "revision_created": "2021-12-02T07:49:11+00:00",
              "revision_log_message": null,
              "enabled": true,
              "title": "Business Overview & Company History",
              "description": null,
              "menu_name": "menu-main-en",
              "link": {
                "uri": "route:<front>",
                "url": "/en",
                "title": null,
                "options": []
              },
              "external": false,
              "rediscover": false,
              "weight": -47,
              "expanded": true,
              "parent": "menu_link_content:915cba59-3524-463c-9fd1-3a1e8b7e2a90",
              "changed": "2021-12-02T07:49:11+00:00",
              "default_langcode": true,
              "revision_translation_affected": true,
              "view_mode": null,
              "content_translation_source": "und",
              "content_translation_outdated": false,
              "content_translation_status": true,
              "content_translation_created": "2021-12-02T07:49:11+00:00"
            },
            "relationships": {
              "bundle": {
                "data": {
                  "type": "menu--menu",
                  "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/5f3ade17-c144-4a6e-af41-1f44f43b1292/bundle"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/5f3ade17-c144-4a6e-af41-1f44f43b1292/relationships/bundle"
                  }
                }
              },
              "revision_user": {
                "data": null,
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/5f3ade17-c144-4a6e-af41-1f44f43b1292/revision_user"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/5f3ade17-c144-4a6e-af41-1f44f43b1292/relationships/revision_user"
                  }
                }
              },
              "content_translation_uid": {
                "data": {
                  "type": "user--user",
                  "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/5f3ade17-c144-4a6e-af41-1f44f43b1292/content_translation_uid"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/5f3ade17-c144-4a6e-af41-1f44f43b1292/relationships/content_translation_uid"
                  }
                }
              }
            }
          }
        ]
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "3781ee3a-a466-4f7f-89a2-19415e005d36",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/3781ee3a-a466-4f7f-89a2-19415e005d36"
          }
        },
        "attributes": {
          "drupal_internal__id": 5591,
          "drupal_internal__revision_id": 5606,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Pro-face Brand",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "route:<nolink>",
            "url": "",
            "title": null,
            "options": []
          },
          "external": false,
          "rediscover": false,
          "weight": -35,
          "expanded": true,
          "parent": "menu_link_content:c1489c7c-3a43-4e2c-8e00-2931c6f68ae5",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/3781ee3a-a466-4f7f-89a2-19415e005d36/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/3781ee3a-a466-4f7f-89a2-19415e005d36/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/3781ee3a-a466-4f7f-89a2-19415e005d36/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/3781ee3a-a466-4f7f-89a2-19415e005d36/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/3781ee3a-a466-4f7f-89a2-19415e005d36/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/3781ee3a-a466-4f7f-89a2-19415e005d36/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": []
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "0a48ce92-77ff-4ed9-8db8-5e11673d3934",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/0a48ce92-77ff-4ed9-8db8-5e11673d3934"
          }
        },
        "attributes": {
          "drupal_internal__id": 5485,
          "drupal_internal__revision_id": 5500,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Corporate Brand",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "route:<front>",
            "url": "/en",
            "title": null,
            "options": []
          },
          "external": false,
          "rediscover": false,
          "weight": -31,
          "expanded": true,
          "parent": "menu_link_content:c1489c7c-3a43-4e2c-8e00-2931c6f68ae5",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/0a48ce92-77ff-4ed9-8db8-5e11673d3934/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/0a48ce92-77ff-4ed9-8db8-5e11673d3934/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/0a48ce92-77ff-4ed9-8db8-5e11673d3934/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/0a48ce92-77ff-4ed9-8db8-5e11673d3934/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/0a48ce92-77ff-4ed9-8db8-5e11673d3934/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/0a48ce92-77ff-4ed9-8db8-5e11673d3934/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": [
          {
            "type": "menu_link_content--menu-main-en",
            "id": "465dcca3-4ad1-4576-bda7-e46c70de2861",
            "links": {
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/465dcca3-4ad1-4576-bda7-e46c70de2861"
              }
            },
            "attributes": {
              "drupal_internal__id": 5491,
              "drupal_internal__revision_id": 5506,
              "langcode": "en",
              "revision_created": "2021-12-02T07:49:11+00:00",
              "revision_log_message": null,
              "enabled": true,
              "title": "Our Brand Concept",
              "description": null,
              "menu_name": "menu-main-en",
              "link": {
                "uri": "route:<front>",
                "url": "/en",
                "title": null,
                "options": []
              },
              "external": false,
              "rediscover": false,
              "weight": -48,
              "expanded": true,
              "parent": "menu_link_content:0a48ce92-77ff-4ed9-8db8-5e11673d3934",
              "changed": "2021-12-02T07:49:11+00:00",
              "default_langcode": true,
              "revision_translation_affected": true,
              "view_mode": null,
              "content_translation_source": "und",
              "content_translation_outdated": false,
              "content_translation_status": true,
              "content_translation_created": "2021-12-02T07:49:11+00:00"
            },
            "relationships": {
              "bundle": {
                "data": {
                  "type": "menu--menu",
                  "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/465dcca3-4ad1-4576-bda7-e46c70de2861/bundle"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/465dcca3-4ad1-4576-bda7-e46c70de2861/relationships/bundle"
                  }
                }
              },
              "revision_user": {
                "data": null,
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/465dcca3-4ad1-4576-bda7-e46c70de2861/revision_user"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/465dcca3-4ad1-4576-bda7-e46c70de2861/relationships/revision_user"
                  }
                }
              },
              "content_translation_uid": {
                "data": {
                  "type": "user--user",
                  "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/465dcca3-4ad1-4576-bda7-e46c70de2861/content_translation_uid"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/465dcca3-4ad1-4576-bda7-e46c70de2861/relationships/content_translation_uid"
                  }
                }
              }
            }
          },
          {
            "type": "menu_link_content--menu-main-en",
            "id": "2ff35199-118f-42a2-9fc3-d3e0f62f8bd8",
            "links": {
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/2ff35199-118f-42a2-9fc3-d3e0f62f8bd8"
              }
            },
            "attributes": {
              "drupal_internal__id": 5490,
              "drupal_internal__revision_id": 5505,
              "langcode": "en",
              "revision_created": "2021-12-02T07:49:11+00:00",
              "revision_log_message": null,
              "enabled": true,
              "title": "For the Best Interface Initiative",
              "description": null,
              "menu_name": "menu-main-en",
              "link": {
                "uri": "route:<front>",
                "url": "/en",
                "title": null,
                "options": []
              },
              "external": false,
              "rediscover": false,
              "weight": -45,
              "expanded": false,
              "parent": "menu_link_content:0a48ce92-77ff-4ed9-8db8-5e11673d3934",
              "changed": "2021-12-02T07:49:11+00:00",
              "default_langcode": true,
              "revision_translation_affected": true,
              "view_mode": null,
              "content_translation_source": "und",
              "content_translation_outdated": false,
              "content_translation_status": true,
              "content_translation_created": "2021-12-02T07:49:11+00:00"
            },
            "relationships": {
              "bundle": {
                "data": {
                  "type": "menu--menu",
                  "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/2ff35199-118f-42a2-9fc3-d3e0f62f8bd8/bundle"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/2ff35199-118f-42a2-9fc3-d3e0f62f8bd8/relationships/bundle"
                  }
                }
              },
              "revision_user": {
                "data": null,
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/2ff35199-118f-42a2-9fc3-d3e0f62f8bd8/revision_user"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/2ff35199-118f-42a2-9fc3-d3e0f62f8bd8/relationships/revision_user"
                  }
                }
              },
              "content_translation_uid": {
                "data": {
                  "type": "user--user",
                  "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/2ff35199-118f-42a2-9fc3-d3e0f62f8bd8/content_translation_uid"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/2ff35199-118f-42a2-9fc3-d3e0f62f8bd8/relationships/content_translation_uid"
                  }
                }
              }
            }
          }
        ]
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "d430c54e-c2dd-40fb-8dcb-0b9e53b961eb",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/d430c54e-c2dd-40fb-8dcb-0b9e53b961eb"
          }
        },
        "attributes": {
          "drupal_internal__id": 5593,
          "drupal_internal__revision_id": 5608,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Corporate Social Responsibility",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "route:<nolink>",
            "url": "",
            "title": null,
            "options": []
          },
          "external": false,
          "rediscover": false,
          "weight": -30,
          "expanded": true,
          "parent": "menu_link_content:c1489c7c-3a43-4e2c-8e00-2931c6f68ae5",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/d430c54e-c2dd-40fb-8dcb-0b9e53b961eb/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/d430c54e-c2dd-40fb-8dcb-0b9e53b961eb/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/d430c54e-c2dd-40fb-8dcb-0b9e53b961eb/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/d430c54e-c2dd-40fb-8dcb-0b9e53b961eb/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/d430c54e-c2dd-40fb-8dcb-0b9e53b961eb/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/d430c54e-c2dd-40fb-8dcb-0b9e53b961eb/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": []
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "f8bb9964-a8e0-4868-9acc-876cd4d53096",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f8bb9964-a8e0-4868-9acc-876cd4d53096"
          }
        },
        "attributes": {
          "drupal_internal__id": 5486,
          "drupal_internal__revision_id": 5501,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Corporate Social Responsibility",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "route:<front>",
            "url": "/en",
            "title": null,
            "options": []
          },
          "external": false,
          "rediscover": false,
          "weight": -29,
          "expanded": true,
          "parent": "menu_link_content:c1489c7c-3a43-4e2c-8e00-2931c6f68ae5",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f8bb9964-a8e0-4868-9acc-876cd4d53096/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f8bb9964-a8e0-4868-9acc-876cd4d53096/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f8bb9964-a8e0-4868-9acc-876cd4d53096/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f8bb9964-a8e0-4868-9acc-876cd4d53096/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f8bb9964-a8e0-4868-9acc-876cd4d53096/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f8bb9964-a8e0-4868-9acc-876cd4d53096/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": [
          {
            "type": "menu_link_content--menu-main-en",
            "id": "f67579b9-672e-4289-bd3f-ee0175cbc407",
            "links": {
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f67579b9-672e-4289-bd3f-ee0175cbc407"
              }
            },
            "attributes": {
              "drupal_internal__id": 5492,
              "drupal_internal__revision_id": 5507,
              "langcode": "en",
              "revision_created": "2021-12-02T07:49:11+00:00",
              "revision_log_message": null,
              "enabled": true,
              "title": "People",
              "description": null,
              "menu_name": "menu-main-en",
              "link": {
                "uri": "route:<front>",
                "url": "/en",
                "title": null,
                "options": []
              },
              "external": false,
              "rediscover": false,
              "weight": -49,
              "expanded": true,
              "parent": "menu_link_content:f8bb9964-a8e0-4868-9acc-876cd4d53096",
              "changed": "2021-12-02T07:49:11+00:00",
              "default_langcode": true,
              "revision_translation_affected": true,
              "view_mode": null,
              "content_translation_source": "und",
              "content_translation_outdated": false,
              "content_translation_status": true,
              "content_translation_created": "2021-12-02T07:49:11+00:00"
            },
            "relationships": {
              "bundle": {
                "data": {
                  "type": "menu--menu",
                  "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f67579b9-672e-4289-bd3f-ee0175cbc407/bundle"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f67579b9-672e-4289-bd3f-ee0175cbc407/relationships/bundle"
                  }
                }
              },
              "revision_user": {
                "data": null,
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f67579b9-672e-4289-bd3f-ee0175cbc407/revision_user"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f67579b9-672e-4289-bd3f-ee0175cbc407/relationships/revision_user"
                  }
                }
              },
              "content_translation_uid": {
                "data": {
                  "type": "user--user",
                  "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f67579b9-672e-4289-bd3f-ee0175cbc407/content_translation_uid"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/f67579b9-672e-4289-bd3f-ee0175cbc407/relationships/content_translation_uid"
                  }
                }
              }
            }
          },
          {
            "type": "menu_link_content--menu-main-en",
            "id": "98b9588b-dbbd-479c-89db-2ba740f62411",
            "links": {
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/98b9588b-dbbd-479c-89db-2ba740f62411"
              }
            },
            "attributes": {
              "drupal_internal__id": 5493,
              "drupal_internal__revision_id": 5508,
              "langcode": "en",
              "revision_created": "2021-12-02T07:49:11+00:00",
              "revision_log_message": null,
              "enabled": true,
              "title": "Community",
              "description": null,
              "menu_name": "menu-main-en",
              "link": {
                "uri": "route:<front>",
                "url": "/en",
                "title": null,
                "options": []
              },
              "external": false,
              "rediscover": false,
              "weight": -19,
              "expanded": true,
              "parent": "menu_link_content:f8bb9964-a8e0-4868-9acc-876cd4d53096",
              "changed": "2021-12-02T07:49:11+00:00",
              "default_langcode": true,
              "revision_translation_affected": true,
              "view_mode": null,
              "content_translation_source": "und",
              "content_translation_outdated": false,
              "content_translation_status": true,
              "content_translation_created": "2021-12-02T07:49:11+00:00"
            },
            "relationships": {
              "bundle": {
                "data": {
                  "type": "menu--menu",
                  "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/98b9588b-dbbd-479c-89db-2ba740f62411/bundle"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/98b9588b-dbbd-479c-89db-2ba740f62411/relationships/bundle"
                  }
                }
              },
              "revision_user": {
                "data": null,
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/98b9588b-dbbd-479c-89db-2ba740f62411/revision_user"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/98b9588b-dbbd-479c-89db-2ba740f62411/relationships/revision_user"
                  }
                }
              },
              "content_translation_uid": {
                "data": {
                  "type": "user--user",
                  "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/98b9588b-dbbd-479c-89db-2ba740f62411/content_translation_uid"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/98b9588b-dbbd-479c-89db-2ba740f62411/relationships/content_translation_uid"
                  }
                }
              }
            }
          },
          {
            "type": "menu_link_content--menu-main-en",
            "id": "bed9b5c8-32fb-45f5-810d-4a9d1905ed8b",
            "links": {
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/bed9b5c8-32fb-45f5-810d-4a9d1905ed8b"
              }
            },
            "attributes": {
              "drupal_internal__id": 5494,
              "drupal_internal__revision_id": 5509,
              "langcode": "en",
              "revision_created": "2021-12-02T07:49:11+00:00",
              "revision_log_message": null,
              "enabled": true,
              "title": "Environment",
              "description": null,
              "menu_name": "menu-main-en",
              "link": {
                "uri": "route:<front>",
                "url": "/en",
                "title": null,
                "options": []
              },
              "external": false,
              "rediscover": false,
              "weight": -13,
              "expanded": true,
              "parent": "menu_link_content:f8bb9964-a8e0-4868-9acc-876cd4d53096",
              "changed": "2021-12-02T07:49:11+00:00",
              "default_langcode": true,
              "revision_translation_affected": true,
              "view_mode": null,
              "content_translation_source": "und",
              "content_translation_outdated": false,
              "content_translation_status": true,
              "content_translation_created": "2021-12-02T07:49:11+00:00"
            },
            "relationships": {
              "bundle": {
                "data": {
                  "type": "menu--menu",
                  "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/bed9b5c8-32fb-45f5-810d-4a9d1905ed8b/bundle"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/bed9b5c8-32fb-45f5-810d-4a9d1905ed8b/relationships/bundle"
                  }
                }
              },
              "revision_user": {
                "data": null,
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/bed9b5c8-32fb-45f5-810d-4a9d1905ed8b/revision_user"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/bed9b5c8-32fb-45f5-810d-4a9d1905ed8b/relationships/revision_user"
                  }
                }
              },
              "content_translation_uid": {
                "data": {
                  "type": "user--user",
                  "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/bed9b5c8-32fb-45f5-810d-4a9d1905ed8b/content_translation_uid"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/bed9b5c8-32fb-45f5-810d-4a9d1905ed8b/relationships/content_translation_uid"
                  }
                }
              }
            }
          }
        ]
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "7733167d-e5d3-4dcd-aca1-17c87df36ed9",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/7733167d-e5d3-4dcd-aca1-17c87df36ed9"
          }
        },
        "attributes": {
          "drupal_internal__id": 5487,
          "drupal_internal__revision_id": 5502,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Worldwide Locations",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "route:<front>",
            "url": "/en",
            "title": null,
            "options": []
          },
          "external": false,
          "rediscover": false,
          "weight": -27,
          "expanded": true,
          "parent": "menu_link_content:c1489c7c-3a43-4e2c-8e00-2931c6f68ae5",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/7733167d-e5d3-4dcd-aca1-17c87df36ed9/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/7733167d-e5d3-4dcd-aca1-17c87df36ed9/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/7733167d-e5d3-4dcd-aca1-17c87df36ed9/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/7733167d-e5d3-4dcd-aca1-17c87df36ed9/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/7733167d-e5d3-4dcd-aca1-17c87df36ed9/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/7733167d-e5d3-4dcd-aca1-17c87df36ed9/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": [
          {
            "type": "menu_link_content--menu-main-en",
            "id": "0d046661-9c73-4edb-8a98-c96f1bcabc2f",
            "links": {
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/0d046661-9c73-4edb-8a98-c96f1bcabc2f"
              }
            },
            "attributes": {
              "drupal_internal__id": 5495,
              "drupal_internal__revision_id": 5510,
              "langcode": "en",
              "revision_created": "2021-12-02T07:49:11+00:00",
              "revision_log_message": null,
              "enabled": true,
              "title": "Americas",
              "description": null,
              "menu_name": "menu-main-en",
              "link": {
                "uri": "route:<front>",
                "url": "/en",
                "title": null,
                "options": []
              },
              "external": false,
              "rediscover": false,
              "weight": -48,
              "expanded": true,
              "parent": "menu_link_content:7733167d-e5d3-4dcd-aca1-17c87df36ed9",
              "changed": "2021-12-02T07:49:11+00:00",
              "default_langcode": true,
              "revision_translation_affected": true,
              "view_mode": null,
              "content_translation_source": "und",
              "content_translation_outdated": false,
              "content_translation_status": true,
              "content_translation_created": "2021-12-02T07:49:11+00:00"
            },
            "relationships": {
              "bundle": {
                "data": {
                  "type": "menu--menu",
                  "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/0d046661-9c73-4edb-8a98-c96f1bcabc2f/bundle"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/0d046661-9c73-4edb-8a98-c96f1bcabc2f/relationships/bundle"
                  }
                }
              },
              "revision_user": {
                "data": null,
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/0d046661-9c73-4edb-8a98-c96f1bcabc2f/revision_user"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/0d046661-9c73-4edb-8a98-c96f1bcabc2f/relationships/revision_user"
                  }
                }
              },
              "content_translation_uid": {
                "data": {
                  "type": "user--user",
                  "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/0d046661-9c73-4edb-8a98-c96f1bcabc2f/content_translation_uid"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/0d046661-9c73-4edb-8a98-c96f1bcabc2f/relationships/content_translation_uid"
                  }
                }
              }
            }
          },
          {
            "type": "menu_link_content--menu-main-en",
            "id": "b666cdf3-066a-4c6b-bac0-1904e0b21c16",
            "links": {
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/b666cdf3-066a-4c6b-bac0-1904e0b21c16"
              }
            },
            "attributes": {
              "drupal_internal__id": 5496,
              "drupal_internal__revision_id": 5511,
              "langcode": "en",
              "revision_created": "2021-12-02T07:49:11+00:00",
              "revision_log_message": null,
              "enabled": true,
              "title": "Asia",
              "description": null,
              "menu_name": "menu-main-en",
              "link": {
                "uri": "route:<front>",
                "url": "/en",
                "title": null,
                "options": []
              },
              "external": false,
              "rediscover": false,
              "weight": -19,
              "expanded": true,
              "parent": "menu_link_content:7733167d-e5d3-4dcd-aca1-17c87df36ed9",
              "changed": "2021-12-02T07:49:11+00:00",
              "default_langcode": true,
              "revision_translation_affected": true,
              "view_mode": null,
              "content_translation_source": "und",
              "content_translation_outdated": false,
              "content_translation_status": true,
              "content_translation_created": "2021-12-02T07:49:11+00:00"
            },
            "relationships": {
              "bundle": {
                "data": {
                  "type": "menu--menu",
                  "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/b666cdf3-066a-4c6b-bac0-1904e0b21c16/bundle"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/b666cdf3-066a-4c6b-bac0-1904e0b21c16/relationships/bundle"
                  }
                }
              },
              "revision_user": {
                "data": null,
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/b666cdf3-066a-4c6b-bac0-1904e0b21c16/revision_user"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/b666cdf3-066a-4c6b-bac0-1904e0b21c16/relationships/revision_user"
                  }
                }
              },
              "content_translation_uid": {
                "data": {
                  "type": "user--user",
                  "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/b666cdf3-066a-4c6b-bac0-1904e0b21c16/content_translation_uid"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/b666cdf3-066a-4c6b-bac0-1904e0b21c16/relationships/content_translation_uid"
                  }
                }
              }
            }
          },
          {
            "type": "menu_link_content--menu-main-en",
            "id": "437c79bc-540b-4f56-8b28-b540b31563a8",
            "links": {
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/437c79bc-540b-4f56-8b28-b540b31563a8"
              }
            },
            "attributes": {
              "drupal_internal__id": 5497,
              "drupal_internal__revision_id": 5512,
              "langcode": "en",
              "revision_created": "2021-12-02T07:49:11+00:00",
              "revision_log_message": null,
              "enabled": true,
              "title": "Europe ",
              "description": null,
              "menu_name": "menu-main-en",
              "link": {
                "uri": "route:<front>",
                "url": "/en",
                "title": null,
                "options": []
              },
              "external": false,
              "rediscover": false,
              "weight": -10,
              "expanded": true,
              "parent": "menu_link_content:7733167d-e5d3-4dcd-aca1-17c87df36ed9",
              "changed": "2021-12-02T07:49:11+00:00",
              "default_langcode": true,
              "revision_translation_affected": true,
              "view_mode": null,
              "content_translation_source": "und",
              "content_translation_outdated": false,
              "content_translation_status": true,
              "content_translation_created": "2021-12-02T07:49:11+00:00"
            },
            "relationships": {
              "bundle": {
                "data": {
                  "type": "menu--menu",
                  "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/437c79bc-540b-4f56-8b28-b540b31563a8/bundle"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/437c79bc-540b-4f56-8b28-b540b31563a8/relationships/bundle"
                  }
                }
              },
              "revision_user": {
                "data": null,
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/437c79bc-540b-4f56-8b28-b540b31563a8/revision_user"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/437c79bc-540b-4f56-8b28-b540b31563a8/relationships/revision_user"
                  }
                }
              },
              "content_translation_uid": {
                "data": {
                  "type": "user--user",
                  "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/437c79bc-540b-4f56-8b28-b540b31563a8/content_translation_uid"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/437c79bc-540b-4f56-8b28-b540b31563a8/relationships/content_translation_uid"
                  }
                }
              }
            }
          }
        ]
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "af04d238-5ba5-4fcb-8166-f1a291f05967",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/af04d238-5ba5-4fcb-8166-f1a291f05967"
          }
        },
        "attributes": {
          "drupal_internal__id": 5823,
          "drupal_internal__revision_id": 5838,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "How to Buy",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "route:<nolink>",
            "url": "",
            "title": null,
            "options": []
          },
          "external": false,
          "rediscover": false,
          "weight": -25,
          "expanded": true,
          "parent": "menu_link_content:c1489c7c-3a43-4e2c-8e00-2931c6f68ae5",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/af04d238-5ba5-4fcb-8166-f1a291f05967/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/af04d238-5ba5-4fcb-8166-f1a291f05967/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/af04d238-5ba5-4fcb-8166-f1a291f05967/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/af04d238-5ba5-4fcb-8166-f1a291f05967/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/af04d238-5ba5-4fcb-8166-f1a291f05967/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/af04d238-5ba5-4fcb-8166-f1a291f05967/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": [
          {
            "type": "menu_link_content--menu-main-en",
            "id": "dc8fb4bb-b1c7-442c-acfe-8df7784e6b96",
            "links": {
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/dc8fb4bb-b1c7-442c-acfe-8df7784e6b96"
              }
            },
            "attributes": {
              "drupal_internal__id": 5830,
              "drupal_internal__revision_id": 5845,
              "langcode": "en",
              "revision_created": "2021-12-02T07:49:11+00:00",
              "revision_log_message": null,
              "enabled": true,
              "title": "China",
              "description": null,
              "menu_name": "menu-main-en",
              "link": {
                "uri": "https://www.proface.com.cn/",
                "url": "https://www.proface.com.cn/",
                "title": null,
                "options": []
              },
              "external": true,
              "rediscover": false,
              "weight": -40,
              "expanded": false,
              "parent": "menu_link_content:af04d238-5ba5-4fcb-8166-f1a291f05967",
              "changed": "2021-12-02T07:49:11+00:00",
              "default_langcode": true,
              "revision_translation_affected": true,
              "view_mode": null,
              "content_translation_source": "und",
              "content_translation_outdated": false,
              "content_translation_status": true,
              "content_translation_created": "2021-12-02T07:49:11+00:00"
            },
            "relationships": {
              "bundle": {
                "data": {
                  "type": "menu--menu",
                  "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/dc8fb4bb-b1c7-442c-acfe-8df7784e6b96/bundle"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/dc8fb4bb-b1c7-442c-acfe-8df7784e6b96/relationships/bundle"
                  }
                }
              },
              "revision_user": {
                "data": null,
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/dc8fb4bb-b1c7-442c-acfe-8df7784e6b96/revision_user"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/dc8fb4bb-b1c7-442c-acfe-8df7784e6b96/relationships/revision_user"
                  }
                }
              },
              "content_translation_uid": {
                "data": {
                  "type": "user--user",
                  "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/dc8fb4bb-b1c7-442c-acfe-8df7784e6b96/content_translation_uid"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/dc8fb4bb-b1c7-442c-acfe-8df7784e6b96/relationships/content_translation_uid"
                  }
                }
              }
            }
          },
          {
            "type": "menu_link_content--menu-main-en",
            "id": "de9b15ac-6180-4b3f-ba1d-f53a140b2e17",
            "links": {
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/de9b15ac-6180-4b3f-ba1d-f53a140b2e17"
              }
            },
            "attributes": {
              "drupal_internal__id": 5827,
              "drupal_internal__revision_id": 5842,
              "langcode": "en",
              "revision_created": "2021-12-02T07:49:11+00:00",
              "revision_log_message": null,
              "enabled": true,
              "title": "Europe",
              "description": null,
              "menu_name": "menu-main-en",
              "link": {
                "uri": "https://www.proface.eu/",
                "url": "https://www.proface.eu/",
                "title": null,
                "options": []
              },
              "external": true,
              "rediscover": false,
              "weight": -30,
              "expanded": false,
              "parent": "menu_link_content:af04d238-5ba5-4fcb-8166-f1a291f05967",
              "changed": "2021-12-02T07:49:11+00:00",
              "default_langcode": true,
              "revision_translation_affected": true,
              "view_mode": null,
              "content_translation_source": "und",
              "content_translation_outdated": false,
              "content_translation_status": true,
              "content_translation_created": "2021-12-02T07:49:11+00:00"
            },
            "relationships": {
              "bundle": {
                "data": {
                  "type": "menu--menu",
                  "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/de9b15ac-6180-4b3f-ba1d-f53a140b2e17/bundle"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/de9b15ac-6180-4b3f-ba1d-f53a140b2e17/relationships/bundle"
                  }
                }
              },
              "revision_user": {
                "data": null,
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/de9b15ac-6180-4b3f-ba1d-f53a140b2e17/revision_user"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/de9b15ac-6180-4b3f-ba1d-f53a140b2e17/relationships/revision_user"
                  }
                }
              },
              "content_translation_uid": {
                "data": {
                  "type": "user--user",
                  "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/de9b15ac-6180-4b3f-ba1d-f53a140b2e17/content_translation_uid"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/de9b15ac-6180-4b3f-ba1d-f53a140b2e17/relationships/content_translation_uid"
                  }
                }
              }
            }
          },
          {
            "type": "menu_link_content--menu-main-en",
            "id": "4f816483-b832-440c-9795-384ebec4fc3c",
            "links": {
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/4f816483-b832-440c-9795-384ebec4fc3c"
              }
            },
            "attributes": {
              "drupal_internal__id": 5829,
              "drupal_internal__revision_id": 5844,
              "langcode": "en",
              "revision_created": "2021-12-02T07:49:11+00:00",
              "revision_log_message": null,
              "enabled": true,
              "title": "Japan",
              "description": null,
              "menu_name": "menu-main-en",
              "link": {
                "uri": "https://www.proface.com/ja/support/distributor",
                "url": "https://www.proface.com/ja/support/distributor",
                "title": null,
                "options": []
              },
              "external": true,
              "rediscover": false,
              "weight": -25,
              "expanded": false,
              "parent": "menu_link_content:af04d238-5ba5-4fcb-8166-f1a291f05967",
              "changed": "2021-12-02T07:49:11+00:00",
              "default_langcode": true,
              "revision_translation_affected": true,
              "view_mode": null,
              "content_translation_source": "und",
              "content_translation_outdated": false,
              "content_translation_status": true,
              "content_translation_created": "2021-12-02T07:49:11+00:00"
            },
            "relationships": {
              "bundle": {
                "data": {
                  "type": "menu--menu",
                  "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/4f816483-b832-440c-9795-384ebec4fc3c/bundle"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/4f816483-b832-440c-9795-384ebec4fc3c/relationships/bundle"
                  }
                }
              },
              "revision_user": {
                "data": null,
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/4f816483-b832-440c-9795-384ebec4fc3c/revision_user"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/4f816483-b832-440c-9795-384ebec4fc3c/relationships/revision_user"
                  }
                }
              },
              "content_translation_uid": {
                "data": {
                  "type": "user--user",
                  "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/4f816483-b832-440c-9795-384ebec4fc3c/content_translation_uid"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/4f816483-b832-440c-9795-384ebec4fc3c/relationships/content_translation_uid"
                  }
                }
              }
            }
          },
          {
            "type": "menu_link_content--menu-main-en",
            "id": "4c46903f-9fa1-440a-a2ec-12cd429aa2a9",
            "links": {
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/4c46903f-9fa1-440a-a2ec-12cd429aa2a9"
              }
            },
            "attributes": {
              "drupal_internal__id": 5825,
              "drupal_internal__revision_id": 5840,
              "langcode": "en",
              "revision_created": "2021-12-02T07:49:11+00:00",
              "revision_log_message": null,
              "enabled": true,
              "title": "North America",
              "description": null,
              "menu_name": "menu-main-en",
              "link": {
                "uri": "https://profaceamerica.com/",
                "url": "https://profaceamerica.com/",
                "title": null,
                "options": []
              },
              "external": true,
              "rediscover": false,
              "weight": -20,
              "expanded": false,
              "parent": "menu_link_content:af04d238-5ba5-4fcb-8166-f1a291f05967",
              "changed": "2021-12-02T07:49:11+00:00",
              "default_langcode": true,
              "revision_translation_affected": true,
              "view_mode": null,
              "content_translation_source": "und",
              "content_translation_outdated": false,
              "content_translation_status": true,
              "content_translation_created": "2021-12-02T07:49:11+00:00"
            },
            "relationships": {
              "bundle": {
                "data": {
                  "type": "menu--menu",
                  "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/4c46903f-9fa1-440a-a2ec-12cd429aa2a9/bundle"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/4c46903f-9fa1-440a-a2ec-12cd429aa2a9/relationships/bundle"
                  }
                }
              },
              "revision_user": {
                "data": null,
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/4c46903f-9fa1-440a-a2ec-12cd429aa2a9/revision_user"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/4c46903f-9fa1-440a-a2ec-12cd429aa2a9/relationships/revision_user"
                  }
                }
              },
              "content_translation_uid": {
                "data": {
                  "type": "user--user",
                  "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/4c46903f-9fa1-440a-a2ec-12cd429aa2a9/content_translation_uid"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/4c46903f-9fa1-440a-a2ec-12cd429aa2a9/relationships/content_translation_uid"
                  }
                }
              }
            }
          },
          {
            "type": "menu_link_content--menu-main-en",
            "id": "394fbf6f-fd2b-4d18-afdb-79a48ed91d3a",
            "links": {
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/394fbf6f-fd2b-4d18-afdb-79a48ed91d3a"
              }
            },
            "attributes": {
              "drupal_internal__id": 5826,
              "drupal_internal__revision_id": 5841,
              "langcode": "en",
              "revision_created": "2021-12-02T07:49:11+00:00",
              "revision_log_message": null,
              "enabled": true,
              "title": "South Korea",
              "description": null,
              "menu_name": "menu-main-en",
              "link": {
                "uri": "https://www.proface.com/ko/",
                "url": "https://www.proface.com/ko/",
                "title": null,
                "options": []
              },
              "external": true,
              "rediscover": false,
              "weight": -10,
              "expanded": false,
              "parent": "menu_link_content:af04d238-5ba5-4fcb-8166-f1a291f05967",
              "changed": "2021-12-02T07:49:11+00:00",
              "default_langcode": true,
              "revision_translation_affected": true,
              "view_mode": null,
              "content_translation_source": "und",
              "content_translation_outdated": false,
              "content_translation_status": true,
              "content_translation_created": "2021-12-02T07:49:11+00:00"
            },
            "relationships": {
              "bundle": {
                "data": {
                  "type": "menu--menu",
                  "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/394fbf6f-fd2b-4d18-afdb-79a48ed91d3a/bundle"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/394fbf6f-fd2b-4d18-afdb-79a48ed91d3a/relationships/bundle"
                  }
                }
              },
              "revision_user": {
                "data": null,
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/394fbf6f-fd2b-4d18-afdb-79a48ed91d3a/revision_user"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/394fbf6f-fd2b-4d18-afdb-79a48ed91d3a/relationships/revision_user"
                  }
                }
              },
              "content_translation_uid": {
                "data": {
                  "type": "user--user",
                  "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/394fbf6f-fd2b-4d18-afdb-79a48ed91d3a/content_translation_uid"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/394fbf6f-fd2b-4d18-afdb-79a48ed91d3a/relationships/content_translation_uid"
                  }
                }
              }
            }
          },
          {
            "type": "menu_link_content--menu-main-en",
            "id": "c8e03f1d-4eb3-4521-b852-ef9fc71895c3",
            "links": {
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/c8e03f1d-4eb3-4521-b852-ef9fc71895c3"
              }
            },
            "attributes": {
              "drupal_internal__id": 5828,
              "drupal_internal__revision_id": 5843,
              "langcode": "en",
              "revision_created": "2021-12-02T07:49:11+00:00",
              "revision_log_message": null,
              "enabled": true,
              "title": "Taiwan",
              "description": null,
              "menu_name": "menu-main-en",
              "link": {
                "uri": "https://www.proface.com/zh-hant/",
                "url": "https://www.proface.com/zh-hant/",
                "title": null,
                "options": []
              },
              "external": true,
              "rediscover": false,
              "weight": -5,
              "expanded": false,
              "parent": "menu_link_content:af04d238-5ba5-4fcb-8166-f1a291f05967",
              "changed": "2021-12-02T07:49:11+00:00",
              "default_langcode": true,
              "revision_translation_affected": true,
              "view_mode": null,
              "content_translation_source": "und",
              "content_translation_outdated": false,
              "content_translation_status": true,
              "content_translation_created": "2021-12-02T07:49:11+00:00"
            },
            "relationships": {
              "bundle": {
                "data": {
                  "type": "menu--menu",
                  "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/c8e03f1d-4eb3-4521-b852-ef9fc71895c3/bundle"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/c8e03f1d-4eb3-4521-b852-ef9fc71895c3/relationships/bundle"
                  }
                }
              },
              "revision_user": {
                "data": null,
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/c8e03f1d-4eb3-4521-b852-ef9fc71895c3/revision_user"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/c8e03f1d-4eb3-4521-b852-ef9fc71895c3/relationships/revision_user"
                  }
                }
              },
              "content_translation_uid": {
                "data": {
                  "type": "user--user",
                  "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
                },
                "links": {
                  "related": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/c8e03f1d-4eb3-4521-b852-ef9fc71895c3/content_translation_uid"
                  },
                  "self": {
                    "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/c8e03f1d-4eb3-4521-b852-ef9fc71895c3/relationships/content_translation_uid"
                  }
                }
              }
            }
          }
        ]
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "dd338b61-0d31-4b68-bd6d-0ed7c2699681",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/dd338b61-0d31-4b68-bd6d-0ed7c2699681"
          }
        },
        "attributes": {
          "drupal_internal__id": 5804,
          "drupal_internal__revision_id": 5819,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Worldwide Offices",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "route:<nolink>",
            "url": "",
            "title": null,
            "options": []
          },
          "external": false,
          "rediscover": false,
          "weight": -10,
          "expanded": true,
          "parent": "menu_link_content:c1489c7c-3a43-4e2c-8e00-2931c6f68ae5",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/dd338b61-0d31-4b68-bd6d-0ed7c2699681/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/dd338b61-0d31-4b68-bd6d-0ed7c2699681/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/dd338b61-0d31-4b68-bd6d-0ed7c2699681/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/dd338b61-0d31-4b68-bd6d-0ed7c2699681/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/dd338b61-0d31-4b68-bd6d-0ed7c2699681/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/dd338b61-0d31-4b68-bd6d-0ed7c2699681/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": []
      },
      {
        "type": "menu_link_content--menu-main-en",
        "id": "33aab534-5223-4093-ad3e-e28fe65472dd",
        "links": {
          "self": {
            "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/33aab534-5223-4093-ad3e-e28fe65472dd"
          }
        },
        "attributes": {
          "drupal_internal__id": 5498,
          "drupal_internal__revision_id": 5513,
          "langcode": "en",
          "revision_created": "2021-12-02T07:49:11+00:00",
          "revision_log_message": null,
          "enabled": true,
          "title": "Press",
          "description": null,
          "menu_name": "menu-main-en",
          "link": {
            "uri": "route:<front>",
            "url": "/en",
            "title": null,
            "options": []
          },
          "external": false,
          "rediscover": false,
          "weight": -5,
          "expanded": true,
          "parent": "menu_link_content:c1489c7c-3a43-4e2c-8e00-2931c6f68ae5",
          "changed": "2021-12-02T07:49:11+00:00",
          "default_langcode": true,
          "revision_translation_affected": true,
          "view_mode": null,
          "content_translation_source": "und",
          "content_translation_outdated": false,
          "content_translation_status": true,
          "content_translation_created": "2021-12-02T07:49:11+00:00"
        },
        "relationships": {
          "bundle": {
            "data": {
              "type": "menu--menu",
              "id": "cd9364a0-2d38-40ad-bf92-393e4c3a7794"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/33aab534-5223-4093-ad3e-e28fe65472dd/bundle"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/33aab534-5223-4093-ad3e-e28fe65472dd/relationships/bundle"
              }
            }
          },
          "revision_user": {
            "data": null,
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/33aab534-5223-4093-ad3e-e28fe65472dd/revision_user"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/33aab534-5223-4093-ad3e-e28fe65472dd/relationships/revision_user"
              }
            }
          },
          "content_translation_uid": {
            "data": {
              "type": "user--user",
              "id": "bb0ff747-d66c-4c4f-80ae-a4e0fd203c93"
            },
            "links": {
              "related": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/33aab534-5223-4093-ad3e-e28fe65472dd/content_translation_uid"
              },
              "self": {
                "href": "https://drupalosl.freya.osaka.nguyen-duy.com/en/jsonapi/menu_link_content/menu-main-en/33aab534-5223-4093-ad3e-e28fe65472dd/relationships/content_translation_uid"
              }
            }
          }
        },
        "children": []
      }
    ]
  }
]

const ProfaceApp = () => {
  // useEffect(() => {
  //   console.log('this is from axios')
  //   fetchApiResponse();
  // }, []);

  // const fetchApiResponse = () => {
  //   var config = {
  //     method: "get",
  //     url: "https://qa-backend.proface.com/jsonapi/menu_link_content/menu-main-en",
  //     headers: {},
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  return (
    <>
      <div className="proface-wrapper proface-wrapper">
        <MainHeader data={data}/>
        <div className="main-content">
          <div className="main">
            <MainContent />
            <div className="footer-wrapper">
              <MainFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfaceApp;
