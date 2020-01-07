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
import CurrencyCodeValues from './CurrencyCodeValues';
import Purchase from './Purchase';

/**
 * The PurchaseHostReservationResult model module.
 * @module model/PurchaseHostReservationResult
 * @version 1.1.0
 */
class PurchaseHostReservationResult {
    /**
     * Constructs a new <code>PurchaseHostReservationResult</code>.
     * @alias module:model/PurchaseHostReservationResult
     */
    constructor() { 
        
        PurchaseHostReservationResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PurchaseHostReservationResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PurchaseHostReservationResult} obj Optional instance to populate.
     * @return {module:model/PurchaseHostReservationResult} The populated <code>PurchaseHostReservationResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PurchaseHostReservationResult();

            if (data.hasOwnProperty('ClientToken')) {
                obj['ClientToken'] = ApiClient.convertToType(data['ClientToken'], 'String');
            }
            if (data.hasOwnProperty('CurrencyCode')) {
                obj['CurrencyCode'] = CurrencyCodeValues.constructFromObject(data['CurrencyCode']);
            }
            if (data.hasOwnProperty('Purchase')) {
                obj['Purchase'] = ApiClient.convertToType(data['Purchase'], [Purchase]);
            }
            if (data.hasOwnProperty('TotalHourlyPrice')) {
                obj['TotalHourlyPrice'] = ApiClient.convertToType(data['TotalHourlyPrice'], 'String');
            }
            if (data.hasOwnProperty('TotalUpfrontPrice')) {
                obj['TotalUpfrontPrice'] = ApiClient.convertToType(data['TotalUpfrontPrice'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} ClientToken
 */
PurchaseHostReservationResult.prototype['ClientToken'] = undefined;

/**
 * @member {module:model/CurrencyCodeValues} CurrencyCode
 */
PurchaseHostReservationResult.prototype['CurrencyCode'] = undefined;

/**
 * @member {Array.<module:model/Purchase>} Purchase
 */
PurchaseHostReservationResult.prototype['Purchase'] = undefined;

/**
 * @member {String} TotalHourlyPrice
 */
PurchaseHostReservationResult.prototype['TotalHourlyPrice'] = undefined;

/**
 * @member {String} TotalUpfrontPrice
 */
PurchaseHostReservationResult.prototype['TotalUpfrontPrice'] = undefined;






export default PurchaseHostReservationResult;

