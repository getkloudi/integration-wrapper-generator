"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UserBasic = _interopRequireDefault(require("./UserBasic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PersonalSnippet model module.
 * @module model/PersonalSnippet
 * @version 1.0.0
 */
var PersonalSnippet =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PersonalSnippet</code>.
   * This feature was introduced in GitLab 8.15.
   * @alias module:model/PersonalSnippet
   */
  function PersonalSnippet() {
    _classCallCheck(this, PersonalSnippet);

    PersonalSnippet.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PersonalSnippet, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PersonalSnippet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PersonalSnippet} obj Optional instance to populate.
     * @return {module:model/PersonalSnippet} The populated <code>PersonalSnippet</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PersonalSnippet();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _UserBasic["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('file_name')) {
          obj['file_name'] = _ApiClient["default"].convertToType(data['file_name'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('raw_url')) {
          obj['raw_url'] = _ApiClient["default"].convertToType(data['raw_url'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('web_url')) {
          obj['web_url'] = _ApiClient["default"].convertToType(data['web_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PersonalSnippet;
}();
/**
 * @member {module:model/UserBasic} author
 */


PersonalSnippet.prototype['author'] = undefined;
/**
 * @member {String} created_at
 */

PersonalSnippet.prototype['created_at'] = undefined;
/**
 * @member {String} file_name
 */

PersonalSnippet.prototype['file_name'] = undefined;
/**
 * @member {String} id
 */

PersonalSnippet.prototype['id'] = undefined;
/**
 * @member {String} raw_url
 */

PersonalSnippet.prototype['raw_url'] = undefined;
/**
 * @member {String} title
 */

PersonalSnippet.prototype['title'] = undefined;
/**
 * @member {String} updated_at
 */

PersonalSnippet.prototype['updated_at'] = undefined;
/**
 * @member {String} web_url
 */

PersonalSnippet.prototype['web_url'] = undefined;
var _default = PersonalSnippet;
exports["default"] = _default;