# AmazonEc2.RequestLaunchTemplateData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blockDeviceMappings** | [**[LaunchTemplateBlockDeviceMappingRequest]**](LaunchTemplateBlockDeviceMappingRequest.md) |  | [optional] 
**capacityReservationSpecification** | [**LaunchTemplateCapacityReservationSpecificationRequest**](LaunchTemplateCapacityReservationSpecificationRequest.md) |  | [optional] 
**cpuOptions** | [**LaunchTemplateCpuOptionsRequest**](LaunchTemplateCpuOptionsRequest.md) |  | [optional] 
**creditSpecification** | [**CreditSpecificationRequest**](CreditSpecificationRequest.md) |  | [optional] 
**disableApiTermination** | **Boolean** |  | [optional] 
**ebsOptimized** | **Boolean** |  | [optional] 
**elasticGpuSpecifications** | [**[ElasticGpuSpecification]**](ElasticGpuSpecification.md) |  | [optional] 
**elasticInferenceAccelerators** | [**[LaunchTemplateElasticInferenceAccelerator]**](LaunchTemplateElasticInferenceAccelerator.md) |  | [optional] 
**hibernationOptions** | [**LaunchTemplateHibernationOptionsRequest**](LaunchTemplateHibernationOptionsRequest.md) |  | [optional] 
**iamInstanceProfile** | [**LaunchTemplateIamInstanceProfileSpecificationRequest**](LaunchTemplateIamInstanceProfileSpecificationRequest.md) |  | [optional] 
**imageId** | **String** |  | [optional] 
**instanceInitiatedShutdownBehavior** | [**ShutdownBehavior**](ShutdownBehavior.md) |  | [optional] 
**instanceMarketOptions** | [**LaunchTemplateInstanceMarketOptionsRequest**](LaunchTemplateInstanceMarketOptionsRequest.md) |  | [optional] 
**instanceType** | [**InstanceType**](InstanceType.md) |  | [optional] 
**kernelId** | **String** |  | [optional] 
**keyName** | **String** |  | [optional] 
**licenseSpecifications** | [**[LaunchTemplateLicenseConfigurationRequest]**](LaunchTemplateLicenseConfigurationRequest.md) |  | [optional] 
**monitoring** | [**LaunchTemplatesMonitoringRequest**](LaunchTemplatesMonitoringRequest.md) |  | [optional] 
**networkInterfaces** | [**[LaunchTemplateInstanceNetworkInterfaceSpecificationRequest]**](LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.md) |  | [optional] 
**placement** | [**LaunchTemplatePlacementRequest**](LaunchTemplatePlacementRequest.md) |  | [optional] 
**ramDiskId** | **String** |  | [optional] 
**securityGroupIds** | **[String]** |  | [optional] 
**securityGroups** | **[String]** |  | [optional] 
**tagSpecifications** | [**[LaunchTemplateTagSpecificationRequest]**](LaunchTemplateTagSpecificationRequest.md) |  | [optional] 
**userData** | **String** |  | [optional] 


