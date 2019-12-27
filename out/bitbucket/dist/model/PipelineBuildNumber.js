"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

var _PipelineBuildNumberAllOf = _interopRequireDefault(require("./PipelineBuildNumberAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineBuildNumber model module.
 * @module model/PipelineBuildNumber
 * @version 1.1.2
 */
var PipelineBuildNumber =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineBuildNumber</code>.
   * @alias module:model/PipelineBuildNumber
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/PipelineBuildNumberAllOf
   * @param type {String} 
   */
  function PipelineBuildNumber(type) {
    _classCallCheck(this, PipelineBuildNumber);

    _ModelObject["default"].initialize(this, type);

    _PipelineBuildNumberAllOf["default"].initialize(this);

    PipelineBuildNumber.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineBuildNumber, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>PipelineBuildNumber</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineBuildNumber} obj Optional instance to populate.
     * @return {module:model/PipelineBuildNumber} The populated <code>PipelineBuildNumber</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineBuildNumber();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _PipelineBuildNumberAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PipelineBuildNumber;
}();
/**
 * The next number that will be used as build number.
 * @member {Number} next
 */


PipelineBuildNumber.prototype['next'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement PipelineBuildNumberAllOf interface:

/**
 * The next number that will be used as build number.
 * @member {Number} next
 */

_PipelineBuildNumberAllOf["default"].prototype['next'] = undefined;
var _default = PipelineBuildNumber;
exports["default"] = _default;