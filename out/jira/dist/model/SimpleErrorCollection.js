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
 * The SimpleErrorCollection model module.
 * @module model/SimpleErrorCollection
 * @version 1.4.0
 */
var SimpleErrorCollection = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SimpleErrorCollection</code>.
   * @alias module:model/SimpleErrorCollection
   */
  function SimpleErrorCollection() {
    _classCallCheck(this, SimpleErrorCollection);

    SimpleErrorCollection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SimpleErrorCollection, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SimpleErrorCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimpleErrorCollection} obj Optional instance to populate.
     * @return {module:model/SimpleErrorCollection} The populated <code>SimpleErrorCollection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SimpleErrorCollection();

        if (data.hasOwnProperty('errorMessages')) {
          obj['errorMessages'] = _ApiClient["default"].convertToType(data['errorMessages'], ['String']);
        }

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('httpStatusCode')) {
          obj['httpStatusCode'] = _ApiClient["default"].convertToType(data['httpStatusCode'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SimpleErrorCollection;
}();
/**
 * The list of error messages produced by this operation. For example, \"input parameter 'key' must be provided\"
 * @member {Array.<String>} errorMessages
 */


SimpleErrorCollection.prototype['errorMessages'] = undefined;
/**
 * The list of errors by parameter returned by the operation. For example,\"projectKey\": \"Project keys must start with an uppercase letter, followed by one or more uppercase alphanumeric characters.\"
 * @member {Object.<String, String>} errors
 */

SimpleErrorCollection.prototype['errors'] = undefined;
/**
 * @member {Number} httpStatusCode
 */

SimpleErrorCollection.prototype['httpStatusCode'] = undefined;
var _default = SimpleErrorCollection;
exports["default"] = _default;