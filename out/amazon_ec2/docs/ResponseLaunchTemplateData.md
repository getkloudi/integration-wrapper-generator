# AmazonEc2.ResponseLaunchTemplateData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blockDeviceMappings** | [**[LaunchTemplateBlockDeviceMapping]**](LaunchTemplateBlockDeviceMapping.md) |  | [optional] 
**capacityReservationSpecification** | [**LaunchTemplateCapacityReservationSpecificationResponse**](LaunchTemplateCapacityReservationSpecificationResponse.md) |  | [optional] 
**cpuOptions** | [**LaunchTemplateCpuOptions**](LaunchTemplateCpuOptions.md) |  | [optional] 
**creditSpecification** | [**CreditSpecification**](CreditSpecification.md) |  | [optional] 
**disableApiTermination** | **Boolean** |  | [optional] 
**ebsOptimized** | **Boolean** |  | [optional] 
**elasticGpuSpecifications** | [**[ElasticGpuSpecificationResponse]**](ElasticGpuSpecificationResponse.md) |  | [optional] 
**elasticInferenceAccelerators** | [**[LaunchTemplateElasticInferenceAcceleratorResponse]**](LaunchTemplateElasticInferenceAcceleratorResponse.md) |  | [optional] 
**hibernationOptions** | [**LaunchTemplateHibernationOptions**](LaunchTemplateHibernationOptions.md) |  | [optional] 
**iamInstanceProfile** | [**LaunchTemplateIamInstanceProfileSpecification**](LaunchTemplateIamInstanceProfileSpecification.md) |  | [optional] 
**imageId** | **String** |  | [optional] 
**instanceInitiatedShutdownBehavior** | [**ShutdownBehavior**](ShutdownBehavior.md) |  | [optional] 
**instanceMarketOptions** | [**LaunchTemplateInstanceMarketOptions**](LaunchTemplateInstanceMarketOptions.md) |  | [optional] 
**instanceType** | [**InstanceType**](InstanceType.md) |  | [optional] 
**kernelId** | **String** |  | [optional] 
**keyName** | **String** |  | [optional] 
**licenseSpecifications** | [**[LaunchTemplateLicenseConfiguration]**](LaunchTemplateLicenseConfiguration.md) |  | [optional] 
**monitoring** | [**LaunchTemplatesMonitoring**](LaunchTemplatesMonitoring.md) |  | [optional] 
**networkInterfaces** | [**[LaunchTemplateInstanceNetworkInterfaceSpecification]**](LaunchTemplateInstanceNetworkInterfaceSpecification.md) |  | [optional] 
**placement** | [**LaunchTemplatePlacement**](LaunchTemplatePlacement.md) |  | [optional] 
**ramDiskId** | **String** |  | [optional] 
**securityGroupIds** | **[String]** |  | [optional] 
**securityGroups** | **[String]** |  | [optional] 
**tagSpecifications** | [**[LaunchTemplateTagSpecification]**](LaunchTemplateTagSpecification.md) |  | [optional] 
**userData** | **String** |  | [optional] 


