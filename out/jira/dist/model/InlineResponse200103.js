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
 * The InlineResponse200103 model module.
 * @module model/InlineResponse200103
 * @version 1.2.0
 */
var InlineResponse200103 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse200103</code>.
   * 
   * @alias module:model/InlineResponse200103
   * @param workflow {String} 
   */
  function InlineResponse200103(workflow) {
    _classCallCheck(this, InlineResponse200103);

    InlineResponse200103.initialize(this, workflow);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse200103, null, [{
    key: "initialize",
    value: function initialize(obj, workflow) {
      obj['workflow'] = workflow;
    }
    /**
     * Constructs a <code>InlineResponse200103</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200103} obj Optional instance to populate.
     * @return {module:model/InlineResponse200103} The populated <code>InlineResponse200103</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse200103();

        if (data.hasOwnProperty('workflow')) {
          obj['workflow'] = _ApiClient["default"].convertToType(data['workflow'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse200103;
}();
/**
 * @member {String} workflow
 */


InlineResponse200103.prototype['workflow'] = undefined;
var _default = InlineResponse200103;
exports["default"] = _default;