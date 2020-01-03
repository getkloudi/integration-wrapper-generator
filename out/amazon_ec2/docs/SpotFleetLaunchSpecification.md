# AmazonEc2.SpotFleetLaunchSpecification

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
**monitoring** | [**SpotFleetMonitoring**](SpotFleetMonitoring.md) |  | [optional] 
**networkInterfaces** | [**[InstanceNetworkInterfaceSpecification]**](InstanceNetworkInterfaceSpecification.md) |  | [optional] 
**placement** | [**SpotPlacement**](SpotPlacement.md) |  | [optional] 
**ramdiskId** | **String** |  | [optional] 
**securityGroups** | [**[GroupIdentifier]**](GroupIdentifier.md) |  | [optional] 
**spotPrice** | **String** |  | [optional] 
**subnetId** | **String** |  | [optional] 
**tagSpecifications** | [**[SpotFleetTagSpecification]**](SpotFleetTagSpecification.md) |  | [optional] 
**userData** | **String** |  | [optional] 
**weightedCapacity** | **Number** |  | [optional] 


