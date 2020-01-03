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
 * The UnsuccessfulItemError model module.
 * @module model/UnsuccessfulItemError
 * @version 1.0.0
 */
var UnsuccessfulItemError =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>UnsuccessfulItemError</code>.
   * Information about the error that occurred. For more information about errors, see &lt;a href&#x3D;\&quot;https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html\&quot;&gt;Error Codes&lt;/a&gt;.
   * @alias module:model/UnsuccessfulItemError
   */
  function UnsuccessfulItemError() {
    _classCallCheck(this, UnsuccessfulItemError);

    UnsuccessfulItemError.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UnsuccessfulItemError, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UnsuccessfulItemError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnsuccessfulItemError} obj Optional instance to populate.
     * @return {module:model/UnsuccessfulItemError} The populated <code>UnsuccessfulItemError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UnsuccessfulItemError();

        if (data.hasOwnProperty('Code')) {
          obj['Code'] = _ApiClient["default"].convertToType(data['Code'], 'String');
        }

        if (data.hasOwnProperty('Message')) {
          obj['Message'] = _ApiClient["default"].convertToType(data['Message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UnsuccessfulItemError;
}();
/**
 * @member {String} Code
 */


UnsuccessfulItemError.prototype['Code'] = undefined;
/**
 * @member {String} Message
 */

UnsuccessfulItemError.prototype['Message'] = undefined;
var _default = UnsuccessfulItemError;
exports["default"] = _default;