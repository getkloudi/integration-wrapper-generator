"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SubjectTypesRepositoryEvents = _interopRequireDefault(require("./SubjectTypesRepositoryEvents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CommentAllOfLinks model module.
 * @module model/CommentAllOfLinks
 * @version 1.2.0
 */
var CommentAllOfLinks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CommentAllOfLinks</code>.
   * @alias module:model/CommentAllOfLinks
   */
  function CommentAllOfLinks() {
    _classCallCheck(this, CommentAllOfLinks);

    CommentAllOfLinks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CommentAllOfLinks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CommentAllOfLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommentAllOfLinks} obj Optional instance to populate.
     * @return {module:model/CommentAllOfLinks} The populated <code>CommentAllOfLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommentAllOfLinks();

        if (data.hasOwnProperty('self')) {
          obj['self'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['self']);
        }

        if (data.hasOwnProperty('html')) {
          obj['html'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['html']);
        }

        if (data.hasOwnProperty('code')) {
          obj['code'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['code']);
        }
      }

      return obj;
    }
  }]);

  return CommentAllOfLinks;
}();
/**
 * @member {module:model/SubjectTypesRepositoryEvents} self
 */


CommentAllOfLinks.prototype['self'] = undefined;
/**
 * @member {module:model/SubjectTypesRepositoryEvents} html
 */

CommentAllOfLinks.prototype['html'] = undefined;
/**
 * @member {module:model/SubjectTypesRepositoryEvents} code
 */

CommentAllOfLinks.prototype['code'] = undefined;
var _default = CommentAllOfLinks;
exports["default"] = _default;