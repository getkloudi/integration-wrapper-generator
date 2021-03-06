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
 * The PublishedWorkflowId model module.
 * @module model/PublishedWorkflowId
 * @version 1.4.0
 */
var PublishedWorkflowId = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PublishedWorkflowId</code>.
   * Properties that identify a published workflow.
   * @alias module:model/PublishedWorkflowId
   * @param name {String} The name of the workflow.
   */
  function PublishedWorkflowId(name) {
    _classCallCheck(this, PublishedWorkflowId);

    PublishedWorkflowId.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PublishedWorkflowId, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>PublishedWorkflowId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PublishedWorkflowId} obj Optional instance to populate.
     * @return {module:model/PublishedWorkflowId} The populated <code>PublishedWorkflowId</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PublishedWorkflowId();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PublishedWorkflowId;
}();
/**
 * The name of the workflow.
 * @member {String} name
 */


PublishedWorkflowId.prototype['name'] = undefined;
var _default = PublishedWorkflowId;
exports["default"] = _default;