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
import ReservationValue from './ReservationValue';
import ReservedInstanceReservationValue from './ReservedInstanceReservationValue';
import TargetReservationValue from './TargetReservationValue';

/**
 * The GetReservedInstancesExchangeQuoteResult model module.
 * @module model/GetReservedInstancesExchangeQuoteResult
 * @version 1.1.0
 */
class GetReservedInstancesExchangeQuoteResult {
    /**
     * Constructs a new <code>GetReservedInstancesExchangeQuoteResult</code>.
     * Contains the output of GetReservedInstancesExchangeQuote.
     * @alias module:model/GetReservedInstancesExchangeQuoteResult
     */
    constructor() { 
        
        GetReservedInstancesExchangeQuoteResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetReservedInstancesExchangeQuoteResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetReservedInstancesExchangeQuoteResult} obj Optional instance to populate.
     * @return {module:model/GetReservedInstancesExchangeQuoteResult} The populated <code>GetReservedInstancesExchangeQuoteResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetReservedInstancesExchangeQuoteResult();

            if (data.hasOwnProperty('CurrencyCode')) {
                obj['CurrencyCode'] = ApiClient.convertToType(data['CurrencyCode'], 'String');
            }
            if (data.hasOwnProperty('IsValidExchange')) {
                obj['IsValidExchange'] = ApiClient.convertToType(data['IsValidExchange'], 'Boolean');
            }
            if (data.hasOwnProperty('OutputReservedInstancesWillExpireAt')) {
                obj['OutputReservedInstancesWillExpireAt'] = ApiClient.convertToType(data['OutputReservedInstancesWillExpireAt'], 'Date');
            }
            if (data.hasOwnProperty('PaymentDue')) {
                obj['PaymentDue'] = ApiClient.convertToType(data['PaymentDue'], 'String');
            }
            if (data.hasOwnProperty('ReservedInstanceValueRollup')) {
                obj['ReservedInstanceValueRollup'] = ReservationValue.constructFromObject(data['ReservedInstanceValueRollup']);
            }
            if (data.hasOwnProperty('ReservedInstanceValueSet')) {
                obj['ReservedInstanceValueSet'] = ApiClient.convertToType(data['ReservedInstanceValueSet'], [ReservedInstanceReservationValue]);
            }
            if (data.hasOwnProperty('TargetConfigurationValueRollup')) {
                obj['TargetConfigurationValueRollup'] = ReservationValue.constructFromObject(data['TargetConfigurationValueRollup']);
            }
            if (data.hasOwnProperty('TargetConfigurationValueSet')) {
                obj['TargetConfigurationValueSet'] = ApiClient.convertToType(data['TargetConfigurationValueSet'], [TargetReservationValue]);
            }
            if (data.hasOwnProperty('ValidationFailureReason')) {
                obj['ValidationFailureReason'] = ApiClient.convertToType(data['ValidationFailureReason'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} CurrencyCode
 */
GetReservedInstancesExchangeQuoteResult.prototype['CurrencyCode'] = undefined;

/**
 * @member {Boolean} IsValidExchange
 */
GetReservedInstancesExchangeQuoteResult.prototype['IsValidExchange'] = undefined;

/**
 * @member {Date} OutputReservedInstancesWillExpireAt
 */
GetReservedInstancesExchangeQuoteResult.prototype['OutputReservedInstancesWillExpireAt'] = undefined;

/**
 * @member {String} PaymentDue
 */
GetReservedInstancesExchangeQuoteResult.prototype['PaymentDue'] = undefined;

/**
 * @member {module:model/ReservationValue} ReservedInstanceValueRollup
 */
GetReservedInstancesExchangeQuoteResult.prototype['ReservedInstanceValueRollup'] = undefined;

/**
 * @member {Array.<module:model/ReservedInstanceReservationValue>} ReservedInstanceValueSet
 */
GetReservedInstancesExchangeQuoteResult.prototype['ReservedInstanceValueSet'] = undefined;

/**
 * @member {module:model/ReservationValue} TargetConfigurationValueRollup
 */
GetReservedInstancesExchangeQuoteResult.prototype['TargetConfigurationValueRollup'] = undefined;

/**
 * @member {Array.<module:model/TargetReservationValue>} TargetConfigurationValueSet
 */
GetReservedInstancesExchangeQuoteResult.prototype['TargetConfigurationValueSet'] = undefined;

/**
 * @member {String} ValidationFailureReason
 */
GetReservedInstancesExchangeQuoteResult.prototype['ValidationFailureReason'] = undefined;






export default GetReservedInstancesExchangeQuoteResult;

