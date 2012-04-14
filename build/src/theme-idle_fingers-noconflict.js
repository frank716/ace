ace.define("ace/theme/idle_fingers",["require","exports","module","ace/lib/dom"],function(a,b,c){b.isDark=!0,b.cssClass="ace-idle-fingers",b.cssText=".ace-idle-fingers .ace_editor {  border: 2px solid rgb(159, 159, 159);}.ace-idle-fingers .ace_editor.ace_focus {  border: 2px solid #327fbd;}.ace-idle-fingers .ace_gutter {  background: #e8e8e8;  color: #333;}.ace-idle-fingers .ace_print_margin {  width: 1px;  background: #e8e8e8;}.ace-idle-fingers .ace_scroller {  background-color: #323232;}.ace-idle-fingers .ace_text-layer {  cursor: text;  color: #FFFFFF;}.ace-idle-fingers .ace_cursor {  border-left: 1px solid #91FF00;}.ace-idle-fingers .ace_cursor.ace_overwrite {  border-left: 0px;  border-bottom: 1px solid #91FF00;}.ace-idle-fingers .ace_marker-layer .ace_selection {  background: rgba(90, 100, 126, 0.88);}.ace-idle-fingers .ace_marker-layer .ace_step {  background: rgb(198, 219, 174);}.ace-idle-fingers .ace_marker-layer .ace_bracket {  margin: -1px 0 0 -1px;  border: 1px solid #404040;}.ace-idle-fingers .ace_marker-layer .ace_active_line {  background: #353637;}.ace-idle-fingers .ace_marker-layer .ace_selected_word {  border: 1px solid rgba(90, 100, 126, 0.88);}.ace-idle-fingers .ace_invisible {  color: #404040;}.ace-idle-fingers .ace_keyword, .ace-idle-fingers .ace_meta {  color:#CC7833;}.ace-idle-fingers .ace_constant, .ace-idle-fingers .ace_constant.ace_other {  color:#6C99BB;}.ace-idle-fingers .ace_constant.ace_character,  {  color:#6C99BB;}.ace-idle-fingers .ace_constant.ace_character.ace_escape,  {  color:#6C99BB;}.ace-idle-fingers .ace_invalid {  color:#FFFFFF;background-color:#FF0000;}.ace-idle-fingers .ace_support.ace_constant {  color:#6C99BB;}.ace-idle-fingers .ace_fold {    background-color: #CC7833;    border-color: #FFFFFF;}.ace-idle-fingers .ace_support.ace_function {  color:#B83426;}.ace-idle-fingers .ace_variable.ace_parameter {  font-style:italic;}.ace-idle-fingers .ace_string {  color:#A5C261;}.ace-idle-fingers .ace_string.ace_regexp {  color:#CCCC33;}.ace-idle-fingers .ace_comment {  font-style:italic;color:#BC9458;}.ace-idle-fingers .ace_meta.ace_tag {  color:#FFE5BB;}.ace-idle-fingers .ace_entity.ace_name {  color:#FFC66D;}.ace-idle-fingers .ace_markup.ace_underline {    text-decoration:underline;}.ace-idle-fingers .ace_collab.ace_user1 {  color:#323232;background-color:#FFF980;}";var d=a("../lib/dom");d.importCssString(b.cssText,b.cssClass)})