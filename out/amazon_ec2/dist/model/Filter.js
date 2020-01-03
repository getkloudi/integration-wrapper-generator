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
 * The Filter model module.
 * @module model/Filter
 * @version 1.0.0
 */
var Filter =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Filter</code>.
   * &lt;p&gt;A filter name and value pair that is used to return a more specific list of results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs. The filters supported by a describe operation are documented with the describe operation. For example:&lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt; &lt;a&gt;DescribeAvailabilityZones&lt;/a&gt; &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;a&gt;DescribeImages&lt;/a&gt; &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;a&gt;DescribeInstances&lt;/a&gt; &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;a&gt;DescribeKeyPairs&lt;/a&gt; &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;a&gt;DescribeSecurityGroups&lt;/a&gt; &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;a&gt;DescribeSnapshots&lt;/a&gt; &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;a&gt;DescribeSubnets&lt;/a&gt; &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;a&gt;DescribeTags&lt;/a&gt; &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;a&gt;DescribeVolumes&lt;/a&gt; &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;a&gt;DescribeVpcs&lt;/a&gt; &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt;
   * @alias module:model/Filter
   */
  function Filter() {
    _classCallCheck(this, Filter);

    Filter.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Filter, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Filter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Filter} obj Optional instance to populate.
     * @return {module:model/Filter} The populated <code>Filter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Filter();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Values')) {
          obj['Values'] = _ApiClient["default"].convertToType(data['Values'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return Filter;
}();
/**
 * @member {String} Name
 */


Filter.prototype['Name'] = undefined;
/**
 * @member {Array.<String>} Values
 */

Filter.prototype['Values'] = undefined;
var _default = Filter;
exports["default"] = _default;