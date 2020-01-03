# AmazonEc2.CreateFleetRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientToken** | **String** |  | [optional] 
**dryRun** | **Boolean** |  | [optional] 
**excessCapacityTerminationPolicy** | [**FleetExcessCapacityTerminationPolicy**](FleetExcessCapacityTerminationPolicy.md) |  | [optional] 
**launchTemplateConfigs** | [**[FleetLaunchTemplateConfigRequest]**](FleetLaunchTemplateConfigRequest.md) |  | 
**onDemandOptions** | [**OnDemandOptionsRequest**](OnDemandOptionsRequest.md) |  | [optional] 
**replaceUnhealthyInstances** | **Boolean** |  | [optional] 
**spotOptions** | [**SpotOptionsRequest**](SpotOptionsRequest.md) |  | [optional] 
**tagSpecifications** | [**[TagSpecification]**](TagSpecification.md) |  | [optional] 
**targetCapacitySpecification** | [**TargetCapacitySpecificationRequest**](TargetCapacitySpecificationRequest.md) |  | 
**terminateInstancesWithExpiration** | **Boolean** |  | [optional] 
**type** | [**FleetType**](FleetType.md) |  | [optional] 
**validFrom** | **Date** |  | [optional] 
**validUntil** | **Date** |  | [optional] 


