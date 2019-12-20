"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateFileBodyCommitter = _interopRequireDefault(require("./CreateFileBodyCommitter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateFileBody model module.
 * @module model/CreateFileBody
 * @version 1.3.2
 */
var CreateFileBody =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateFileBody</code>.
   * @alias module:model/CreateFileBody
   */
  function CreateFileBody() {
    _classCallCheck(this, CreateFileBody);

    CreateFileBody.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateFileBody, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateFileBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFileBody} obj Optional instance to populate.
     * @return {module:model/CreateFileBody} The populated <code>CreateFileBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateFileBody();

        if (data.hasOwnProperty('committer')) {
          obj['committer'] = _CreateFileBodyCommitter["default"].constructFromObject(data['committer']);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateFileBody;
}();
/**
 * @member {module:model/CreateFileBodyCommitter} committer
 */


CreateFileBody.prototype['committer'] = undefined;
/**
 * @member {String} content
 */

CreateFileBody.prototype['content'] = undefined;
/**
 * @member {String} message
 */

CreateFileBody.prototype['message'] = undefined;
var _default = CreateFileBody;
exports["default"] = _default;