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

/**
 * The ProvisionedBandwidth model module.
 * @module model/ProvisionedBandwidth
 * @version 1.1.0
 */
class ProvisionedBandwidth {
    /**
     * Constructs a new <code>ProvisionedBandwidth</code>.
     * Reserved. If you need to sustain traffic greater than the &lt;a href&#x3D;\&quot;https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html\&quot;&gt;documented limits&lt;/a&gt;, contact us through the &lt;a href&#x3D;\&quot;https://console.aws.amazon.com/support/home?\&quot;&gt;Support Center&lt;/a&gt;.
     * @alias module:model/ProvisionedBandwidth
     */
    constructor() { 
        
        ProvisionedBandwidth.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProvisionedBandwidth</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProvisionedBandwidth} obj Optional instance to populate.
     * @return {module:model/ProvisionedBandwidth} The populated <code>ProvisionedBandwidth</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProvisionedBandwidth();

            if (data.hasOwnProperty('ProvisionTime')) {
                obj['ProvisionTime'] = ApiClient.convertToType(data['ProvisionTime'], 'Date');
            }
            if (data.hasOwnProperty('Provisioned')) {
                obj['Provisioned'] = ApiClient.convertToType(data['Provisioned'], 'String');
            }
            if (data.hasOwnProperty('RequestTime')) {
                obj['RequestTime'] = ApiClient.convertToType(data['RequestTime'], 'Date');
            }
            if (data.hasOwnProperty('Requested')) {
                obj['Requested'] = ApiClient.convertToType(data['Requested'], 'String');
            }
            if (data.hasOwnProperty('Status')) {
                obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} ProvisionTime
 */
ProvisionedBandwidth.prototype['ProvisionTime'] = undefined;

/**
 * @member {String} Provisioned
 */
ProvisionedBandwidth.prototype['Provisioned'] = undefined;

/**
 * @member {Date} RequestTime
 */
ProvisionedBandwidth.prototype['RequestTime'] = undefined;

/**
 * @member {String} Requested
 */
ProvisionedBandwidth.prototype['Requested'] = undefined;

/**
 * @member {String} Status
 */
ProvisionedBandwidth.prototype['Status'] = undefined;






export default ProvisionedBandwidth;
