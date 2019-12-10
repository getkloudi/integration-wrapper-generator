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
 * The ReleaseCreate model module.
 * @module model/ReleaseCreate
 * @version 1.2.0
 */
var ReleaseCreate =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ReleaseCreate</code>.
   * @alias module:model/ReleaseCreate
   */
  function ReleaseCreate() {
    _classCallCheck(this, ReleaseCreate);

    ReleaseCreate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReleaseCreate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReleaseCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReleaseCreate} obj Optional instance to populate.
     * @return {module:model/ReleaseCreate} The populated <code>ReleaseCreate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReleaseCreate();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('draft')) {
          obj['draft'] = _ApiClient["default"].convertToType(data['draft'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('prerelease')) {
          obj['prerelease'] = _ApiClient["default"].convertToType(data['prerelease'], 'Boolean');
        }

        if (data.hasOwnProperty('tag_name')) {
          obj['tag_name'] = _ApiClient["default"].convertToType(data['tag_name'], 'String');
        }

        if (data.hasOwnProperty('target_commitish')) {
          obj['target_commitish'] = _ApiClient["default"].convertToType(data['target_commitish'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReleaseCreate;
}();
/**
 * @member {String} body
 */


ReleaseCreate.prototype['body'] = undefined;
/**
 * @member {Boolean} draft
 */

ReleaseCreate.prototype['draft'] = undefined;
/**
 * @member {String} name
 */

ReleaseCreate.prototype['name'] = undefined;
/**
 * @member {Boolean} prerelease
 */

ReleaseCreate.prototype['prerelease'] = undefined;
/**
 * @member {String} tag_name
 */

ReleaseCreate.prototype['tag_name'] = undefined;
/**
 * @member {String} target_commitish
 */

ReleaseCreate.prototype['target_commitish'] = undefined;
var _default = ReleaseCreate;
exports["default"] = _default;