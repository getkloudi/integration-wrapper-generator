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
* Enum class CapacityReservationInstancePlatform.
* @enum {}
* @readonly
*/
export default class CapacityReservationInstancePlatform {
    
        /**
         * value: "Linux/UNIX"
         * @const
         */
        "Linux/UNIX" = "Linux/UNIX";

    
        /**
         * value: "Red Hat Enterprise Linux"
         * @const
         */
        "Red Hat Enterprise Linux" = "Red Hat Enterprise Linux";

    
        /**
         * value: "SUSE Linux"
         * @const
         */
        "SUSE Linux" = "SUSE Linux";

    
        /**
         * value: "Windows"
         * @const
         */
        "Windows" = "Windows";

    
        /**
         * value: "Windows with SQL Server"
         * @const
         */
        "Windows with SQL Server" = "Windows with SQL Server";

    
        /**
         * value: "Windows with SQL Server Enterprise"
         * @const
         */
        "Windows with SQL Server Enterprise" = "Windows with SQL Server Enterprise";

    
        /**
         * value: "Windows with SQL Server Standard"
         * @const
         */
        "Windows with SQL Server Standard" = "Windows with SQL Server Standard";

    
        /**
         * value: "Windows with SQL Server Web"
         * @const
         */
        "Windows with SQL Server Web" = "Windows with SQL Server Web";

    
        /**
         * value: "Linux with SQL Server Standard"
         * @const
         */
        "Linux with SQL Server Standard" = "Linux with SQL Server Standard";

    
        /**
         * value: "Linux with SQL Server Web"
         * @const
         */
        "Linux with SQL Server Web" = "Linux with SQL Server Web";

    
        /**
         * value: "Linux with SQL Server Enterprise"
         * @const
         */
        "Linux with SQL Server Enterprise" = "Linux with SQL Server Enterprise";

    

    /**
    * Returns a <code>CapacityReservationInstancePlatform</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CapacityReservationInstancePlatform} The enum <code>CapacityReservationInstancePlatform</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

