"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ConnectionLogOptions model module.
 * @module model/ConnectionLogOptions
 * @version 1.0.0
 */
var ConnectionLogOptions =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ConnectionLogOptions</code>.
   * Describes the client connection logging options for the Client VPN endpoint.
   * @alias module:model/ConnectionLogOptions
   */
  function ConnectionLogOptions() {
    _classCallCheck(this, ConnectionLogOptions);

    ConnectionLogOptions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConnectionLogOptions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConnectionLogOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConnectionLogOptions} obj Optional instance to populate.
     * @return {module:model/ConnectionLogOptions} The populated <code>ConnectionLogOptions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConnectionLogOptions();

        if (data.hasOwnProperty('CloudwatchLogGroup')) {
          obj['CloudwatchLogGroup'] = _ApiClient["default"].convertToType(data['CloudwatchLogGroup'], 'String');
        }

        if (data.hasOwnProperty('CloudwatchLogStream')) {
          obj['CloudwatchLogStream'] = _ApiClient["default"].convertToType(data['CloudwatchLogStream'], 'String');
        }

        if (data.hasOwnProperty('Enabled')) {
          obj['Enabled'] = _ApiClient["default"].convertToType(data['Enabled'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ConnectionLogOptions;
}();
/**
 * @member {String} CloudwatchLogGroup
 */


ConnectionLogOptions.prototype['CloudwatchLogGroup'] = undefined;
/**
 * @member {String} CloudwatchLogStream
 */

ConnectionLogOptions.prototype['CloudwatchLogStream'] = undefined;
/**
 * @member {Boolean} Enabled
 */

ConnectionLogOptions.prototype['Enabled'] = undefined;
var _default = ConnectionLogOptions;
exports["default"] = _default;