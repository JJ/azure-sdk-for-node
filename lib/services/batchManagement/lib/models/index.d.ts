/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
// TODO: Include PageTemplateModels here too?? Probably
 */


/**
 * @class
 * Initializes a new instance of the AutoStorageBaseProperties class.
 * @constructor
 * The properties related to auto storage.
 * @member {string} storageAccountId The resource id of the storage account to
 * be used for auto storage.
 * 
 */
export interface AutoStorageBaseProperties {
    storageAccountId: string;
}

/**
 * @class
 * Initializes a new instance of the AccountBaseProperties class.
 * @constructor
 * The properties of a Batch account.
 * @member {object} [autoStorage] The properties related to auto storage.
 * 
 * @member {string} [autoStorage.storageAccountId] The resource id of the
 * storage account to be used for auto storage.
 * 
 */
export interface AccountBaseProperties {
    autoStorage?: AutoStorageBaseProperties;
}

/**
 * @class
 * Initializes a new instance of the BatchAccountCreateParameters class.
 * @constructor
 * Parameters supplied to the Create operation.
 * @member {string} [location] The region in which the account is created.
 * 
 * @member {object} [tags] The user specified tags associated with the account.
 * 
 * @member {object} [autoStorage] The properties related to auto storage.
 * 
 * @member {string} [autoStorage.storageAccountId] The resource id of the
 * storage account to be used for auto storage.
 * 
 */
export interface BatchAccountCreateParameters {
    location?: string;
    tags?: { [propertyName: string]: string };
    autoStorage?: AutoStorageBaseProperties;
}

/**
 * @class
 * Initializes a new instance of the AutoStorageProperties class.
 * @constructor
 * Contains information about the auto storage associated with a Batch account.
 * @member {string} storageAccountId The resource id of the storage account to
 * be used for auto storage.
 * 
 * @member {date} lastKeySync The UTC time at which storage keys were last
 * synced to the Batch account.
 * 
 */
export interface AutoStorageProperties {
    storageAccountId: string;
    lastKeySync: Date;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * @member {string} [id] Resource Id
 * 
 * @member {string} [name] Resource name
 * 
 * @member {string} [type] Resource type
 * 
 * @member {string} [location] Resource location
 * 
 * @member {object} [tags] Resource tags
 * 
 */
export interface Resource extends BaseResource {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the AccountResource class.
 * @constructor
 * The Batch account information.
 * @member {string} [accountEndpoint] The endpoint used by this account to
 * obtain Batch services.
 * 
 * @member {string} [provisioningState] The provisioned state of the resource.
 * Possible values include: 'Invalid', 'Creating', 'Deleting', 'Succeeded',
 * 'Failed', 'Cancelled'
 * 
 * @member {object} [autoStorage] The properties and status of any auto
 * storage associated with the account.
 * 
 * @member {string} [autoStorage.storageAccountId] The resource id of the
 * storage account to be used for auto storage.
 * 
 * @member {date} [autoStorage.lastKeySync] The UTC time at which storage keys
 * were last synced to the Batch account.
 * 
 * @member {number} [coreQuota] The core quota for this Batch account.
 * 
 * @member {number} [poolQuota] The pool quota for this Batch account.
 * 
 * @member {number} [activeJobAndJobScheduleQuota] The active job and job
 * schedule quota for this Batch account.
 * 
 */
export interface AccountResource extends Resource {
    accountEndpoint?: string;
    provisioningState?: string;
    autoStorage?: AutoStorageProperties;
    coreQuota?: number;
    poolQuota?: number;
    activeJobAndJobScheduleQuota?: number;
}

/**
 * @class
 * Initializes a new instance of the BatchAccountUpdateParameters class.
 * @constructor
 * Parameters supplied to the Update operation.
 * @member {object} [tags] The user specified tags associated with the account.
 * 
 * @member {object} [properties] The properties of the account.
 * 
 * @member {object} [properties.autoStorage] The properties related to auto
 * storage.
 * 
 * @member {string} [properties.autoStorage.storageAccountId] The resource id
 * of the storage account to be used for auto storage.
 * 
 */
export interface BatchAccountUpdateParameters {
    tags?: { [propertyName: string]: string };
    properties?: AccountBaseProperties;
}

/**
 * @class
 * Initializes a new instance of the BatchAccountRegenerateKeyParameters class.
 * @constructor
 * Parameters supplied to the RegenerateKey operation.
 * @member {string} keyName The type of account key to regenerate. Possible
 * values include: 'Primary', 'Secondary'
 * 
 */
export interface BatchAccountRegenerateKeyParameters {
    keyName: string;
}

/**
 * @class
 * Initializes a new instance of the BatchAccountRegenerateKeyResult class.
 * @constructor
 * Values returned by the RegenerateKey operation.
 * @member {string} [primary] The primary key associated with the account.
 * 
 * @member {string} [secondary] The secondary key associated with the account.
 * 
 */
export interface BatchAccountRegenerateKeyResult {
    primary?: string;
    secondary?: string;
}

/**
 * @class
 * Initializes a new instance of the BatchAccountListKeyResult class.
 * @constructor
 * Values returned by the GetKeys operation.
 * @member {string} [primary] The primary key associated with the account.
 * 
 * @member {string} [secondary] The secondary key associated with the account.
 * 
 */
export interface BatchAccountListKeyResult {
    primary?: string;
    secondary?: string;
}

/**
 * @class
 * Initializes a new instance of the ActivateApplicationPackageParameters class.
 * @constructor
 * Parameters for an ApplicationOperations.ActivateApplicationPackage request.
 * @member {string} format The format of the application package binary file.
 * 
 */
export interface ActivateApplicationPackageParameters {
    format: string;
}

/**
 * @class
 * Initializes a new instance of the AddApplicationParameters class.
 * @constructor
 * Parameters for an ApplicationOperations.AddApplication request.
 * @member {boolean} [allowUpdates] A value indicating whether packages within
 * the application may be overwritten using the same version string.
 * 
 * @member {string} [displayName] The display name for the application.
 * 
 */
export interface AddApplicationParameters {
    allowUpdates?: boolean;
    displayName?: string;
}

/**
 * @class
 * Initializes a new instance of the AddApplicationPackageResult class.
 * @constructor
 * Response to an ApplicationOperations.AddApplicationPackage request.
 * @member {string} [id] The id of the application.
 * 
 * @member {string} [version] The version of the application.
 * 
 * @member {string} [storageUrl] The URL to which the application package
 * binary file should be uploaded.
 * 
 * @member {date} [storageUrlExpiry] The UTC time at which the storage URL
 * will expire.
 * 
 */
export interface AddApplicationPackageResult {
    id?: string;
    version?: string;
    storageUrl?: string;
    storageUrlExpiry?: Date;
}

/**
 * @class
 * Initializes a new instance of the ApplicationPackage class.
 * @constructor
 * Contains information about an application package.
 * @member {string} [version] The version of the application package.
 * 
 * @member {string} [state] The current state of the application package.
 * Possible values include: 'pending', 'active', 'unmapped'
 * 
 * @member {string} [format] The format of the application package, if known.
 * 
 * @member {date} [lastActivationTime] The time at which the package was last
 * activated, if the package is active.
 * 
 */
export interface ApplicationPackage {
    version?: string;
    state?: string;
    format?: string;
    lastActivationTime?: Date;
}

/**
 * @class
 * Initializes a new instance of the Application class.
 * @constructor
 * Contains information about an application in a Batch account.
 * @member {string} [id] A string that uniquely identifies the application
 * within the account.
 * 
 * @member {string} [displayName] The display name for the application.
 * 
 * @member {array} [packages] The list of packages under this application.
 * 
 * @member {boolean} [allowUpdates] A value indicating whether packages within
 * the application may be overwritten using the same version string.
 * 
 * @member {string} [defaultVersion] Gets or sets which package to use if a
 * client requests the application but does not specify a version.
 * 
 */
export interface Application {
    id?: string;
    displayName?: string;
    packages?: ApplicationPackage[];
    allowUpdates?: boolean;
    defaultVersion?: string;
}

/**
 * @class
 * Initializes a new instance of the GetApplicationPackageResult class.
 * @constructor
 * Response to an ApplicationOperations.GetApplicationPackage request.
 * @member {string} [id] The id of the application.
 * 
 * @member {string} [version] The version of the application package.
 * 
 * @member {string} [state] The current state of the application package.
 * Possible values include: 'pending', 'active', 'unmapped'
 * 
 * @member {string} [format] The format of the application package, if known.
 * 
 * @member {string} [storageUrl] The storage URL at which the application
 * package is stored.
 * 
 * @member {date} [storageUrlExpiry] The UTC time at which the storage URL
 * will expire.
 * 
 * @member {date} [lastActivationTime] The time at which the package was last
 * activated, if the package is active.
 * 
 */
export interface GetApplicationPackageResult {
    id?: string;
    version?: string;
    state?: string;
    format?: string;
    storageUrl?: string;
    storageUrlExpiry?: Date;
    lastActivationTime?: Date;
}

/**
 * @class
 * Initializes a new instance of the UpdateApplicationParameters class.
 * @constructor
 * Parameters for an ApplicationOperations.UpdateApplication request.
 * @member {boolean} [allowUpdates] A value indicating whether packages within
 * the application may be overwritten using the same version string.
 * 
 * @member {string} [defaultVersion] Gets or sets which package to use if a
 * client requests the application but does not specify a version.
 * 
 * @member {string} [displayName] The display name for the application.
 * 
 */
export interface UpdateApplicationParameters {
    allowUpdates?: boolean;
    defaultVersion?: string;
    displayName?: string;
}

/**
 * @class
 * Initializes a new instance of the SubscriptionQuotasGetResult class.
 * @constructor
 * Values returned by the Get Subscription Quotas operation.
 * @member {number} [accountQuota] The number of accounts the subscription is
 * allowed to create in the Batch Service at the specified region.
 * 
 */
export interface SubscriptionQuotasGetResult {
    accountQuota?: number;
}
