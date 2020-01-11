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
* Enum class InstanceAttributeName.
* @enum {}
* @readonly
*/
export default class InstanceAttributeName {
    
        /**
         * value: "instanceType"
         * @const
         */
        "instanceType" = "instanceType";

    
        /**
         * value: "kernel"
         * @const
         */
        "kernel" = "kernel";

    
        /**
         * value: "ramdisk"
         * @const
         */
        "ramdisk" = "ramdisk";

    
        /**
         * value: "userData"
         * @const
         */
        "userData" = "userData";

    
        /**
         * value: "disableApiTermination"
         * @const
         */
        "disableApiTermination" = "disableApiTermination";

    
        /**
         * value: "instanceInitiatedShutdownBehavior"
         * @const
         */
        "instanceInitiatedShutdownBehavior" = "instanceInitiatedShutdownBehavior";

    
        /**
         * value: "rootDeviceName"
         * @const
         */
        "rootDeviceName" = "rootDeviceName";

    
        /**
         * value: "blockDeviceMapping"
         * @const
         */
        "blockDeviceMapping" = "blockDeviceMapping";

    
        /**
         * value: "productCodes"
         * @const
         */
        "productCodes" = "productCodes";

    
        /**
         * value: "sourceDestCheck"
         * @const
         */
        "sourceDestCheck" = "sourceDestCheck";

    
        /**
         * value: "groupSet"
         * @const
         */
        "groupSet" = "groupSet";

    
        /**
         * value: "ebsOptimized"
         * @const
         */
        "ebsOptimized" = "ebsOptimized";

    
        /**
         * value: "sriovNetSupport"
         * @const
         */
        "sriovNetSupport" = "sriovNetSupport";

    
        /**
         * value: "enaSupport"
         * @const
         */
        "enaSupport" = "enaSupport";

    

    /**
    * Returns a <code>InstanceAttributeName</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/InstanceAttributeName} The enum <code>InstanceAttributeName</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
