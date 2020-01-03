# AmazonEc2.SpotFleetRequestConfigData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocationStrategy** | [**AllocationStrategy**](AllocationStrategy.md) |  | [optional] 
**clientToken** | **String** |  | [optional] 
**excessCapacityTerminationPolicy** | [**ExcessCapacityTerminationPolicy**](ExcessCapacityTerminationPolicy.md) |  | [optional] 
**fulfilledCapacity** | **Number** |  | [optional] 
**iamFleetRole** | **String** |  | 
**instanceInterruptionBehavior** | [**InstanceInterruptionBehavior**](InstanceInterruptionBehavior.md) |  | [optional] 
**instancePoolsToUseCount** | **Number** |  | [optional] 
**launchSpecifications** | [**[SpotFleetLaunchSpecification]**](SpotFleetLaunchSpecification.md) |  | [optional] 
**launchTemplateConfigs** | [**[LaunchTemplateConfig]**](LaunchTemplateConfig.md) |  | [optional] 
**loadBalancersConfig** | [**LoadBalancersConfig**](LoadBalancersConfig.md) |  | [optional] 
**onDemandAllocationStrategy** | [**OnDemandAllocationStrategy**](OnDemandAllocationStrategy.md) |  | [optional] 
**onDemandFulfilledCapacity** | **Number** |  | [optional] 
**onDemandMaxTotalPrice** | **String** |  | [optional] 
**onDemandTargetCapacity** | **Number** |  | [optional] 
**replaceUnhealthyInstances** | **Boolean** |  | [optional] 
**spotMaxTotalPrice** | **String** |  | [optional] 
**spotPrice** | **String** |  | [optional] 
**targetCapacity** | **Number** |  | 
**terminateInstancesWithExpiration** | **Boolean** |  | [optional] 
**type** | [**FleetType**](FleetType.md) |  | [optional] 
**validFrom** | **Date** |  | [optional] 
**validUntil** | **Date** |  | [optional] 


