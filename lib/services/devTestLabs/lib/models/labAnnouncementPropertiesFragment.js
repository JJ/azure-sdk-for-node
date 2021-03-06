/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Properties of a lab's announcement banner
 *
 */
class LabAnnouncementPropertiesFragment {
  /**
   * Create a LabAnnouncementPropertiesFragment.
   * @member {string} [title] The plain text title for the lab announcement
   * @member {string} [markdown] The markdown text (if any) that this lab
   * displays in the UI. If left empty/null, nothing will be shown.
   * @member {string} [enabled] Is the lab announcement active/enabled at this
   * time?. Possible values include: 'Enabled', 'Disabled'
   * @member {date} [expirationDate] The time at which the announcement expires
   * (null for never)
   * @member {boolean} [expired] Has this announcement expired?
   */
  constructor() {
  }

  /**
   * Defines the metadata of LabAnnouncementPropertiesFragment
   *
   * @returns {object} metadata of LabAnnouncementPropertiesFragment
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LabAnnouncementPropertiesFragment',
      type: {
        name: 'Composite',
        className: 'LabAnnouncementPropertiesFragment',
        modelProperties: {
          title: {
            required: false,
            serializedName: 'title',
            type: {
              name: 'String'
            }
          },
          markdown: {
            required: false,
            serializedName: 'markdown',
            type: {
              name: 'String'
            }
          },
          enabled: {
            required: false,
            serializedName: 'enabled',
            type: {
              name: 'String'
            }
          },
          expirationDate: {
            required: false,
            serializedName: 'expirationDate',
            type: {
              name: 'DateTime'
            }
          },
          expired: {
            required: false,
            serializedName: 'expired',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = LabAnnouncementPropertiesFragment;
