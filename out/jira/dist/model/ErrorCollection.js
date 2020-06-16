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
 * The ErrorCollection model module.
 * @module model/ErrorCollection
 * @version 1.4.0
 */
var ErrorCollection = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ErrorCollection</code>.
   * Error messages from an operation.
   * @alias module:model/ErrorCollection
   */
  function ErrorCollection() {
    _classCallCheck(this, ErrorCollection);

    ErrorCollection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ErrorCollection, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ErrorCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorCollection} obj Optional instance to populate.
     * @return {module:model/ErrorCollection} The populated <code>ErrorCollection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ErrorCollection();

        if (data.hasOwnProperty('errorMessages')) {
          obj['errorMessages'] = _ApiClient["default"].convertToType(data['errorMessages'], ['String']);
        }

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ErrorCollection;
}();
/**
 * The list of error messages produced by this operation. For example, \"input parameter 'key' must be provided\"
 * @member {Array.<String>} errorMessages
 */


ErrorCollection.prototype['errorMessages'] = undefined;
/**
 * The list of errors by parameter returned by the operation. For example,\"projectKey\": \"Project keys must start with an uppercase letter, followed by one or more uppercase alphanumeric characters.\"
 * @member {Object.<String, String>} errors
 */

ErrorCollection.prototype['errors'] = undefined;
/**
 * @member {Number} status
 */

ErrorCollection.prototype['status'] = undefined;
var _default = ErrorCollection;
exports["default"] = _default;