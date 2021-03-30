/*
 * Copyright © Websolute spa. All rights reserved.
 * See LICENSE and/or COPYING.txt for license details.
 */

define([
    'Magento_Ui/js/grid/columns/column',
    'Websolute_TransporterReports/js/js-beautify/beautify.min'
], function (
    Column,
    beautify
) {
    'use strict';

    return Column.extend({
        defaults: {
            bodyTmpl: 'Websolute_TransporterReports/grid/columns/json.html'
        },

        getLabel: function (value) {
            var data = value[this['index']];

            if (data) {
                data = beautify.js_beautify(data, {
                    "indent_size": 4,
                    "indent_char": "&nbsp;",
                    "indent_with_tabs": false,
                    "editorconfig": false,
                    "eol": "<br/>",
                    "end_with_newline": false,
                    "indent_level": 0,
                    "preserve_newlines": true,
                    "max_preserve_newlines": 10,
                    "space_in_paren": false,
                    "space_in_empty_paren": false,
                    "jslint_happy": false,
                    "space_after_anon_function": false,
                    "space_after_named_function": false,
                    "brace_style": "collapse",
                    "unindent_chained_methods": false,
                    "break_chained_methods": false,
                    "keep_array_indentation": false,
                    "unescape_strings": false,
                    "wrap_line_length": 0,
                    "e4x": false,
                    "comma_first": false,
                    "operator_position": "before-newline",
                    "indent_empty_lines": false,
                    "templating": ["auto"]
                });
            }

            return data;
        }
    });
});
