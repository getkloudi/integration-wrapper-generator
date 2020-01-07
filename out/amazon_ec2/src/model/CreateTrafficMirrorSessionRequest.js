/**
 * Amazon Elastic Compute Cloud
 * <fullname>Amazon Elastic Compute Cloud</fullname> <p>Amazon Elastic Compute Cloud (Amazon EC2) provides secure and resizable computing capacity in the AWS cloud. Using Amazon EC2 eliminates the need to invest in hardware up front, so you can develop and deploy applications faster.</p> <p>To learn more, see the following resources:</p> <ul> <li> <p>Amazon EC2: <a href=\"http://aws.amazon.com/ec2\">AmazonEC2 product page</a>, <a href=\"http://aws.amazon.com/documentation/ec2\">Amazon EC2 documentation</a> </p> </li> <li> <p>Amazon EBS: <a href=\"http://aws.amazon.com/ebs\">Amazon EBS product page</a>, <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html\">Amazon EBS documentation</a> </p> </li> <li> <p>Amazon VPC: <a href=\"http://aws.amazon.com/vpc\">Amazon VPC product page</a>, <a href=\"http://aws.amazon.com/documentation/vpc\">Amazon VPC documentation</a> </p> </li> <li> <p>AWS VPN: <a href=\"http://aws.amazon.com/vpn\">AWS VPN product page</a>, <a href=\"http://aws.amazon.com/documentation/vpn\">AWS VPN documentation</a> </p> </li> </ul>
 *
 * The version of the OpenAPI document: 2016-11-15
 * Contact: mike.ralphson@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import TagSpecification from './TagSpecification';

/**
 * The CreateTrafficMirrorSessionRequest model module.
 * @module model/CreateTrafficMirrorSessionRequest
 * @version 1.1.0
 */
class CreateTrafficMirrorSessionRequest {
    /**
     * Constructs a new <code>CreateTrafficMirrorSessionRequest</code>.
     * @alias module:model/CreateTrafficMirrorSessionRequest
     * @param networkInterfaceId {String} 
     * @param sessionNumber {Number} 
     * @param trafficMirrorFilterId {String} 
     * @param trafficMirrorTargetId {String} 
     */
    constructor(networkInterfaceId, sessionNumber, trafficMirrorFilterId, trafficMirrorTargetId) { 
        
        CreateTrafficMirrorSessionRequest.initialize(this, networkInterfaceId, sessionNumber, trafficMirrorFilterId, trafficMirrorTargetId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, networkInterfaceId, sessionNumber, trafficMirrorFilterId, trafficMirrorTargetId) { 
        obj['NetworkInterfaceId'] = networkInterfaceId;
        obj['SessionNumber'] = sessionNumber;
        obj['TrafficMirrorFilterId'] = trafficMirrorFilterId;
        obj['TrafficMirrorTargetId'] = trafficMirrorTargetId;
    }

    /**
     * Constructs a <code>CreateTrafficMirrorSessionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTrafficMirrorSessionRequest} obj Optional instance to populate.
     * @return {module:model/CreateTrafficMirrorSessionRequest} The populated <code>CreateTrafficMirrorSessionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTrafficMirrorSessionRequest();

            if (data.hasOwnProperty('ClientToken')) {
                obj['ClientToken'] = ApiClient.convertToType(data['ClientToken'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('DryRun')) {
                obj['DryRun'] = ApiClient.convertToType(data['DryRun'], 'Boolean');
            }
            if (data.hasOwnProperty('NetworkInterfaceId')) {
                obj['NetworkInterfaceId'] = ApiClient.convertToType(data['NetworkInterfaceId'], 'String');
            }
            if (data.hasOwnProperty('PacketLength')) {
                obj['PacketLength'] = ApiClient.convertToType(data['PacketLength'], 'Number');
            }
            if (data.hasOwnProperty('SessionNumber')) {
                obj['SessionNumber'] = ApiClient.convertToType(data['SessionNumber'], 'Number');
            }
            if (data.hasOwnProperty('TagSpecifications')) {
                obj['TagSpecifications'] = ApiClient.convertToType(data['TagSpecifications'], [TagSpecification]);
            }
            if (data.hasOwnProperty('TrafficMirrorFilterId')) {
                obj['TrafficMirrorFilterId'] = ApiClient.convertToType(data['TrafficMirrorFilterId'], 'String');
            }
            if (data.hasOwnProperty('TrafficMirrorTargetId')) {
                obj['TrafficMirrorTargetId'] = ApiClient.convertToType(data['TrafficMirrorTargetId'], 'String');
            }
            if (data.hasOwnProperty('VirtualNetworkId')) {
                obj['VirtualNetworkId'] = ApiClient.convertToType(data['VirtualNetworkId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} ClientToken
 */
CreateTrafficMirrorSessionRequest.prototype['ClientToken'] = undefined;

/**
 * @member {String} Description
 */
CreateTrafficMirrorSessionRequest.prototype['Description'] = undefined;

/**
 * @member {Boolean} DryRun
 */
CreateTrafficMirrorSessionRequest.prototype['DryRun'] = undefined;

/**
 * @member {String} NetworkInterfaceId
 */
CreateTrafficMirrorSessionRequest.prototype['NetworkInterfaceId'] = undefined;

/**
 * @member {Number} PacketLength
 */
CreateTrafficMirrorSessionRequest.prototype['PacketLength'] = undefined;

/**
 * @member {Number} SessionNumber
 */
CreateTrafficMirrorSessionRequest.prototype['SessionNumber'] = undefined;

/**
 * @member {Array.<module:model/TagSpecification>} TagSpecifications
 */
CreateTrafficMirrorSessionRequest.prototype['TagSpecifications'] = undefined;

/**
 * @member {String} TrafficMirrorFilterId
 */
CreateTrafficMirrorSessionRequest.prototype['TrafficMirrorFilterId'] = undefined;

/**
 * @member {String} TrafficMirrorTargetId
 */
CreateTrafficMirrorSessionRequest.prototype['TrafficMirrorTargetId'] = undefined;

/**
 * @member {Number} VirtualNetworkId
 */
CreateTrafficMirrorSessionRequest.prototype['VirtualNetworkId'] = undefined;






export default CreateTrafficMirrorSessionRequest;

