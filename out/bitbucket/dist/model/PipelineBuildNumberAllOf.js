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
 * The PipelineBuildNumberAllOf model module.
 * @module model/PipelineBuildNumberAllOf
 * @version 1.1.0
 */
var PipelineBuildNumberAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineBuildNumberAllOf</code>.
   * A Pipelines build number.
   * @alias module:model/PipelineBuildNumberAllOf
   */
  function PipelineBuildNumberAllOf() {
    _classCallCheck(this, PipelineBuildNumberAllOf);

    PipelineBuildNumberAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineBuildNumberAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PipelineBuildNumberAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineBuildNumberAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineBuildNumberAllOf} The populated <code>PipelineBuildNumberAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineBuildNumberAllOf();

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PipelineBuildNumberAllOf;
}();
/**
 * The next number that will be used as build number.
 * @member {Number} next
 */


PipelineBuildNumberAllOf.prototype['next'] = undefined;
var _default = PipelineBuildNumberAllOf;
exports["default"] = _default;