# AmazonEc2.RequestSpotLaunchSpecification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addressingType** | **String** |  | [optional] 
**blockDeviceMappings** | [**[BlockDeviceMapping]**](BlockDeviceMapping.md) |  | [optional] 
**ebsOptimized** | **Boolean** |  | [optional] 
**iamInstanceProfile** | [**IamInstanceProfileSpecification**](IamInstanceProfileSpecification.md) |  | [optional] 
**imageId** | **String** |  | [optional] 
**instanceType** | [**InstanceType**](InstanceType.md) |  | [optional] 
**kernelId** | **String** |  | [optional] 
**keyName** | **String** |  | [optional] 
**monitoring** | [**RunInstancesMonitoringEnabled**](RunInstancesMonitoringEnabled.md) |  | [optional] 
**networkInterfaces** | [**[InstanceNetworkInterfaceSpecification]**](InstanceNetworkInterfaceSpecification.md) |  | [optional] 
**placement** | [**SpotPlacement**](SpotPlacement.md) |  | [optional] 
**ramdiskId** | **String** |  | [optional] 
**securityGroupIds** | **[String]** |  | [optional] 
**securityGroups** | **[String]** |  | [optional] 
**subnetId** | **String** |  | [optional] 
**userData** | **String** |  | [optional] 


