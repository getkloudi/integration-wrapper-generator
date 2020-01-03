# AmazonEc2.RunInstancesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalInfo** | **String** |  | [optional] 
**blockDeviceMappings** | [**[BlockDeviceMapping]**](BlockDeviceMapping.md) |  | [optional] 
**capacityReservationSpecification** | [**CapacityReservationSpecification**](CapacityReservationSpecification.md) |  | [optional] 
**clientToken** | **String** |  | [optional] 
**cpuOptions** | [**CpuOptionsRequest**](CpuOptionsRequest.md) |  | [optional] 
**creditSpecification** | [**CreditSpecificationRequest**](CreditSpecificationRequest.md) |  | [optional] 
**disableApiTermination** | **Boolean** |  | [optional] 
**dryRun** | **Boolean** |  | [optional] 
**ebsOptimized** | **Boolean** |  | [optional] 
**elasticGpuSpecification** | [**[ElasticGpuSpecification]**](ElasticGpuSpecification.md) |  | [optional] 
**elasticInferenceAccelerators** | [**[ElasticInferenceAccelerator]**](ElasticInferenceAccelerator.md) |  | [optional] 
**hibernationOptions** | [**HibernationOptionsRequest**](HibernationOptionsRequest.md) |  | [optional] 
**iamInstanceProfile** | [**IamInstanceProfileSpecification**](IamInstanceProfileSpecification.md) |  | [optional] 
**imageId** | **String** |  | [optional] 
**instanceInitiatedShutdownBehavior** | [**ShutdownBehavior**](ShutdownBehavior.md) |  | [optional] 
**instanceMarketOptions** | [**InstanceMarketOptionsRequest**](InstanceMarketOptionsRequest.md) |  | [optional] 
**instanceType** | [**InstanceType**](InstanceType.md) |  | [optional] 
**ipv6AddressCount** | **Number** |  | [optional] 
**ipv6Addresses** | [**[InstanceIpv6Address]**](InstanceIpv6Address.md) |  | [optional] 
**kernelId** | **String** |  | [optional] 
**keyName** | **String** |  | [optional] 
**launchTemplate** | [**LaunchTemplateSpecification**](LaunchTemplateSpecification.md) |  | [optional] 
**licenseSpecifications** | [**[LicenseConfigurationRequest]**](LicenseConfigurationRequest.md) |  | [optional] 
**maxCount** | **Number** |  | 
**metadataOptions** | [**InstanceMetadataOptionsRequest**](InstanceMetadataOptionsRequest.md) |  | [optional] 
**minCount** | **Number** |  | 
**monitoring** | [**RunInstancesMonitoringEnabled**](RunInstancesMonitoringEnabled.md) |  | [optional] 
**networkInterfaces** | [**[InstanceNetworkInterfaceSpecification]**](InstanceNetworkInterfaceSpecification.md) |  | [optional] 
**placement** | [**Placement**](Placement.md) |  | [optional] 
**privateIpAddress** | **String** |  | [optional] 
**ramdiskId** | **String** |  | [optional] 
**securityGroupIds** | **[String]** |  | [optional] 
**securityGroups** | **[String]** |  | [optional] 
**subnetId** | **String** |  | [optional] 
**tagSpecifications** | [**[TagSpecification]**](TagSpecification.md) |  | [optional] 
**userData** | **String** |  | [optional] 


