// Generated from sequenceLexer.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002D\u024e\b\u0001\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u00049\t9\u0004:\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004",
    "?\t?\u0004@\t@\u0004A\tA\u0004B\tB\u0004C\tC\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017",
    "\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a",
    "\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003!\u0003!\u0003!\u0003",
    "!\u0003!\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003",
    "\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003",
    "\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003",
    "\"\u0005\"\u00fb\n\"\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003",
    "#\u0003$\u0003$\u0003$\u0003$\u0003%\u0003%\u0003%\u0003%\u0003%\u0003",
    "%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0005%\u0116",
    "\n%\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003)\u0003)\u0003",
    ")\u0003)\u0003*\u0003*\u0003*\u0003+\u0003+\u0003+\u0003+\u0003+\u0003",
    "+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0005+\u013b\n+\u0003,\u0003",
    ",\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003",
    ",\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0005,\u014f\n,\u0003-\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003",
    "-\u0005-\u0167\n-\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003",
    ".\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0005.\u0179",
    "\n.\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003",
    "/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0005/\u018d",
    "\n/\u00030\u00030\u00030\u00030\u00030\u00030\u00030\u00030\u00030\u0003",
    "0\u00030\u00030\u00030\u00030\u00050\u019d\n0\u00031\u00031\u00031\u0003",
    "1\u00031\u00031\u00031\u00031\u00031\u00031\u00031\u00031\u00051\u01ab",
    "\n1\u00032\u00032\u00032\u00032\u00032\u00032\u00032\u00032\u00032\u0003",
    "2\u00032\u00032\u00052\u01b9\n2\u00033\u00033\u00033\u00033\u00033\u0003",
    "3\u00033\u00033\u00033\u00033\u00033\u00033\u00053\u01c7\n3\u00034\u0003",
    "4\u00034\u00034\u00034\u00034\u00034\u00034\u00034\u00034\u00034\u0003",
    "4\u00054\u01d5\n4\u00035\u00035\u00035\u00035\u00035\u00035\u00035\u0003",
    "5\u00035\u00035\u00035\u00035\u00035\u00035\u00055\u01e5\n5\u00036\u0003",
    "6\u00036\u00036\u00036\u00036\u00036\u00036\u00036\u00036\u00036\u0003",
    "6\u00056\u01f3\n6\u00037\u00037\u00037\u00037\u00037\u00037\u00057\u01fb",
    "\n7\u00038\u00038\u00039\u00039\u00079\u0201\n9\f9\u000e9\u0204\u000b",
    "9\u0003:\u0006:\u0207\n:\r:\u000e:\u0208\u0003;\u0006;\u020c\n;\r;\u000e",
    ";\u020d\u0003;\u0003;\u0007;\u0212\n;\f;\u000e;\u0215\u000b;\u0003;",
    "\u0003;\u0006;\u0219\n;\r;\u000e;\u021a\u0005;\u021d\n;\u0003<\u0003",
    "<\u0003<\u0003<\u0007<\u0223\n<\f<\u000e<\u0226\u000b<\u0003<\u0005",
    "<\u0229\n<\u0003=\u0003=\u0003=\u0003=\u0003>\u0003>\u0003>\u0003>\u0003",
    "?\u0003?\u0003?\u0003?\u0007?\u0237\n?\f?\u000e?\u023a\u000b?\u0003",
    "?\u0003?\u0003?\u0003?\u0003@\u0003@\u0003A\u0006A\u0243\nA\rA\u000e",
    "A\u0244\u0003B\u0003B\u0003B\u0003B\u0003C\u0003C\u0003C\u0003C\u0003",
    "\u0238\u0002D\u0004\u0003\u0006\u0004\b\u0005\n\u0006\f\u0007\u000e",
    "\b\u0010\t\u0012\n\u0014\u000b\u0016\f\u0018\r\u001a\u000e\u001c\u000f",
    "\u001e\u0010 \u0011\"\u0012$\u0013&\u0014(\u0015*\u0016,\u0017.\u0018",
    "0\u00192\u001a4\u001b6\u001c8\u001d:\u001e<\u001f> @!B\"D#F$H%J&L\'",
    "N(P)R*T+V,X-Z.\\/^0`1b2d3f4h5j6l7n8p9r:t;v<x=z>|?~@\u0080A\u0082B\u0084",
    "C\u0086D\u0004\u0002\u0003\t\u0005\u0002C\\aac|\u0006\u00022;C\\aac",
    "|\u0003\u00022;\u0005\u0002\f\f\u000f\u000f$$\u0004\u0002\f\f\u000f",
    "\u000f\u0004\u0002\u000b\u000b\"\"\u0003\u0002\"\"\u0002\u026d\u0002",
    "\u0004\u0003\u0002\u0002\u0002\u0002\u0006\u0003\u0002\u0002\u0002\u0002",
    "\b\u0003\u0002\u0002\u0002\u0002\n\u0003\u0002\u0002\u0002\u0002\f\u0003",
    "\u0002\u0002\u0002\u0002\u000e\u0003\u0002\u0002\u0002\u0002\u0010\u0003",
    "\u0002\u0002\u0002\u0002\u0012\u0003\u0002\u0002\u0002\u0002\u0014\u0003",
    "\u0002\u0002\u0002\u0002\u0016\u0003\u0002\u0002\u0002\u0002\u0018\u0003",
    "\u0002\u0002\u0002\u0002\u001a\u0003\u0002\u0002\u0002\u0002\u001c\u0003",
    "\u0002\u0002\u0002\u0002\u001e\u0003\u0002\u0002\u0002\u0002 \u0003",
    "\u0002\u0002\u0002\u0002\"\u0003\u0002\u0002\u0002\u0002$\u0003\u0002",
    "\u0002\u0002\u0002&\u0003\u0002\u0002\u0002\u0002(\u0003\u0002\u0002",
    "\u0002\u0002*\u0003\u0002\u0002\u0002\u0002,\u0003\u0002\u0002\u0002",
    "\u0002.\u0003\u0002\u0002\u0002\u00020\u0003\u0002\u0002\u0002\u0002",
    "2\u0003\u0002\u0002\u0002\u00024\u0003\u0002\u0002\u0002\u00026\u0003",
    "\u0002\u0002\u0002\u00028\u0003\u0002\u0002\u0002\u0002:\u0003\u0002",
    "\u0002\u0002\u0002<\u0003\u0002\u0002\u0002\u0002>\u0003\u0002\u0002",
    "\u0002\u0002@\u0003\u0002\u0002\u0002\u0002B\u0003\u0002\u0002\u0002",
    "\u0002D\u0003\u0002\u0002\u0002\u0002F\u0003\u0002\u0002\u0002\u0002",
    "H\u0003\u0002\u0002\u0002\u0002J\u0003\u0002\u0002\u0002\u0002L\u0003",
    "\u0002\u0002\u0002\u0002N\u0003\u0002\u0002\u0002\u0002P\u0003\u0002",
    "\u0002\u0002\u0002R\u0003\u0002\u0002\u0002\u0002T\u0003\u0002\u0002",
    "\u0002\u0002V\u0003\u0002\u0002\u0002\u0002X\u0003\u0002\u0002\u0002",
    "\u0002Z\u0003\u0002\u0002\u0002\u0002\\\u0003\u0002\u0002\u0002\u0002",
    "^\u0003\u0002\u0002\u0002\u0002`\u0003\u0002\u0002\u0002\u0002b\u0003",
    "\u0002\u0002\u0002\u0002d\u0003\u0002\u0002\u0002\u0002f\u0003\u0002",
    "\u0002\u0002\u0002h\u0003\u0002\u0002\u0002\u0002j\u0003\u0002\u0002",
    "\u0002\u0002l\u0003\u0002\u0002\u0002\u0002n\u0003\u0002\u0002\u0002",
    "\u0002p\u0003\u0002\u0002\u0002\u0002r\u0003\u0002\u0002\u0002\u0002",
    "t\u0003\u0002\u0002\u0002\u0002v\u0003\u0002\u0002\u0002\u0002x\u0003",
    "\u0002\u0002\u0002\u0002z\u0003\u0002\u0002\u0002\u0002|\u0003\u0002",
    "\u0002\u0002\u0002~\u0003\u0002\u0002\u0002\u0002\u0080\u0003\u0002",
    "\u0002\u0002\u0003\u0082\u0003\u0002\u0002\u0002\u0003\u0084\u0003\u0002",
    "\u0002\u0002\u0003\u0086\u0003\u0002\u0002\u0002\u0004\u0088\u0003\u0002",
    "\u0002\u0002\u0006\u008c\u0003\u0002\u0002\u0002\b\u008f\u0003\u0002",
    "\u0002\u0002\n\u0092\u0003\u0002\u0002\u0002\f\u0095\u0003\u0002\u0002",
    "\u0002\u000e\u0097\u0003\u0002\u0002\u0002\u0010\u009a\u0003\u0002\u0002",
    "\u0002\u0012\u009d\u0003\u0002\u0002\u0002\u0014\u00a0\u0003\u0002\u0002",
    "\u0002\u0016\u00a3\u0003\u0002\u0002\u0002\u0018\u00a5\u0003\u0002\u0002",
    "\u0002\u001a\u00a7\u0003\u0002\u0002\u0002\u001c\u00aa\u0003\u0002\u0002",
    "\u0002\u001e\u00ad\u0003\u0002\u0002\u0002 \u00af\u0003\u0002\u0002",
    "\u0002\"\u00b1\u0003\u0002\u0002\u0002$\u00b3\u0003\u0002\u0002\u0002",
    "&\u00b5\u0003\u0002\u0002\u0002(\u00b7\u0003\u0002\u0002\u0002*\u00b9",
    "\u0003\u0002\u0002\u0002,\u00bb\u0003\u0002\u0002\u0002.\u00bd\u0003",
    "\u0002\u0002\u00020\u00bf\u0003\u0002\u0002\u00022\u00c1\u0003\u0002",
    "\u0002\u00024\u00c3\u0003\u0002\u0002\u00026\u00c5\u0003\u0002\u0002",
    "\u00028\u00c7\u0003\u0002\u0002\u0002:\u00c9\u0003\u0002\u0002\u0002",
    "<\u00ce\u0003\u0002\u0002\u0002>\u00d4\u0003\u0002\u0002\u0002@\u00d8",
    "\u0003\u0002\u0002\u0002B\u00db\u0003\u0002\u0002\u0002D\u00fa\u0003",
    "\u0002\u0002\u0002F\u00fc\u0003\u0002\u0002\u0002H\u0103\u0003\u0002",
    "\u0002\u0002J\u0115\u0003\u0002\u0002\u0002L\u0117\u0003\u0002\u0002",
    "\u0002N\u011d\u0003\u0002\u0002\u0002P\u0121\u0003\u0002\u0002\u0002",
    "R\u0127\u0003\u0002\u0002\u0002T\u012b\u0003\u0002\u0002\u0002V\u013a",
    "\u0003\u0002\u0002\u0002X\u014e\u0003\u0002\u0002\u0002Z\u0166\u0003",
    "\u0002\u0002\u0002\\\u0178\u0003\u0002\u0002\u0002^\u018c\u0003\u0002",
    "\u0002\u0002`\u019c\u0003\u0002\u0002\u0002b\u01aa\u0003\u0002\u0002",
    "\u0002d\u01b8\u0003\u0002\u0002\u0002f\u01c6\u0003\u0002\u0002\u0002",
    "h\u01d4\u0003\u0002\u0002\u0002j\u01e4\u0003\u0002\u0002\u0002l\u01f2",
    "\u0003\u0002\u0002\u0002n\u01fa\u0003\u0002\u0002\u0002p\u01fc\u0003",
    "\u0002\u0002\u0002r\u01fe\u0003\u0002\u0002\u0002t\u0206\u0003\u0002",
    "\u0002\u0002v\u021c\u0003\u0002\u0002\u0002x\u021e\u0003\u0002\u0002",
    "\u0002z\u022a\u0003\u0002\u0002\u0002|\u022e\u0003\u0002\u0002\u0002",
    "~\u0232\u0003\u0002\u0002\u0002\u0080\u023f\u0003\u0002\u0002\u0002",
    "\u0082\u0242\u0003\u0002\u0002\u0002\u0084\u0246\u0003\u0002\u0002\u0002",
    "\u0086\u024a\u0003\u0002\u0002\u0002\u0088\u0089\u0007<\u0002\u0002",
    "\u0089\u008a\u0003\u0002\u0002\u0002\u008a\u008b\b\u0002\u0002\u0002",
    "\u008b\u0005\u0003\u0002\u0002\u0002\u008c\u008d\u0007>\u0002\u0002",
    "\u008d\u008e\u0007>\u0002\u0002\u008e\u0007\u0003\u0002\u0002\u0002",
    "\u008f\u0090\u0007@\u0002\u0002\u0090\u0091\u0007@\u0002\u0002\u0091",
    "\t\u0003\u0002\u0002\u0002\u0092\u0093\u0007/\u0002\u0002\u0093\u0094",
    "\u0007@\u0002\u0002\u0094\u000b\u0003\u0002\u0002\u0002\u0095\u0096",
    "\u0007B\u0002\u0002\u0096\r\u0003\u0002\u0002\u0002\u0097\u0098\u0007",
    "~\u0002\u0002\u0098\u0099\u0007~\u0002\u0002\u0099\u000f\u0003\u0002",
    "\u0002\u0002\u009a\u009b\u0007(\u0002\u0002\u009b\u009c\u0007(\u0002",
    "\u0002\u009c\u0011\u0003\u0002\u0002\u0002\u009d\u009e\u0007?\u0002",
    "\u0002\u009e\u009f\u0007?\u0002\u0002\u009f\u0013\u0003\u0002\u0002",
    "\u0002\u00a0\u00a1\u0007#\u0002\u0002\u00a1\u00a2\u0007?\u0002\u0002",
    "\u00a2\u0015\u0003\u0002\u0002\u0002\u00a3\u00a4\u0007@\u0002\u0002",
    "\u00a4\u0017\u0003\u0002\u0002\u0002\u00a5\u00a6\u0007>\u0002\u0002",
    "\u00a6\u0019\u0003\u0002\u0002\u0002\u00a7\u00a8\u0007@\u0002\u0002",
    "\u00a8\u00a9\u0007?\u0002\u0002\u00a9\u001b\u0003\u0002\u0002\u0002",
    "\u00aa\u00ab\u0007>\u0002\u0002\u00ab\u00ac\u0007?\u0002\u0002\u00ac",
    "\u001d\u0003\u0002\u0002\u0002\u00ad\u00ae\u0007-\u0002\u0002\u00ae",
    "\u001f\u0003\u0002\u0002\u0002\u00af\u00b0\u0007/\u0002\u0002\u00b0",
    "!\u0003\u0002\u0002\u0002\u00b1\u00b2\u0007,\u0002\u0002\u00b2#\u0003",
    "\u0002\u0002\u0002\u00b3\u00b4\u00071\u0002\u0002\u00b4%\u0003\u0002",
    "\u0002\u0002\u00b5\u00b6\u0007\'\u0002\u0002\u00b6\'\u0003\u0002\u0002",
    "\u0002\u00b7\u00b8\u0007`\u0002\u0002\u00b8)\u0003\u0002\u0002\u0002",
    "\u00b9\u00ba\u0007#\u0002\u0002\u00ba+\u0003\u0002\u0002\u0002\u00bb",
    "\u00bc\u0007=\u0002\u0002\u00bc-\u0003\u0002\u0002\u0002\u00bd\u00be",
    "\u0007.\u0002\u0002\u00be/\u0003\u0002\u0002\u0002\u00bf\u00c0\u0007",
    "?\u0002\u0002\u00c01\u0003\u0002\u0002\u0002\u00c1\u00c2\u0007*\u0002",
    "\u0002\u00c23\u0003\u0002\u0002\u0002\u00c3\u00c4\u0007+\u0002\u0002",
    "\u00c45\u0003\u0002\u0002\u0002\u00c5\u00c6\u0007}\u0002\u0002\u00c6",
    "7\u0003\u0002\u0002\u0002\u00c7\u00c8\u0007\u007f\u0002\u0002\u00c8",
    "9\u0003\u0002\u0002\u0002\u00c9\u00ca\u0007v\u0002\u0002\u00ca\u00cb",
    "\u0007t\u0002\u0002\u00cb\u00cc\u0007w\u0002\u0002\u00cc\u00cd\u0007",
    "g\u0002\u0002\u00cd;\u0003\u0002\u0002\u0002\u00ce\u00cf\u0007h\u0002",
    "\u0002\u00cf\u00d0\u0007c\u0002\u0002\u00d0\u00d1\u0007n\u0002\u0002",
    "\u00d1\u00d2\u0007u\u0002\u0002\u00d2\u00d3\u0007g\u0002\u0002\u00d3",
    "=\u0003\u0002\u0002\u0002\u00d4\u00d5\u0007p\u0002\u0002\u00d5\u00d6",
    "\u0007k\u0002\u0002\u00d6\u00d7\u0007n\u0002\u0002\u00d7?\u0003\u0002",
    "\u0002\u0002\u00d8\u00d9\u0007k\u0002\u0002\u00d9\u00da\u0007h\u0002",
    "\u0002\u00daA\u0003\u0002\u0002\u0002\u00db\u00dc\u0007g\u0002\u0002",
    "\u00dc\u00dd\u0007n\u0002\u0002\u00dd\u00de\u0007u\u0002\u0002\u00de",
    "\u00df\u0007g\u0002\u0002\u00dfC\u0003\u0002\u0002\u0002\u00e0\u00e1",
    "\u0007y\u0002\u0002\u00e1\u00e2\u0007j\u0002\u0002\u00e2\u00e3\u0007",
    "k\u0002\u0002\u00e3\u00e4\u0007n\u0002\u0002\u00e4\u00fb\u0007g\u0002",
    "\u0002\u00e5\u00e6\u0007h\u0002\u0002\u00e6\u00e7\u0007q\u0002\u0002",
    "\u00e7\u00fb\u0007t\u0002\u0002\u00e8\u00e9\u0007h\u0002\u0002\u00e9",
    "\u00ea\u0007q\u0002\u0002\u00ea\u00eb\u0007t\u0002\u0002\u00eb\u00ec",
    "\u0007g\u0002\u0002\u00ec\u00ed\u0007c\u0002\u0002\u00ed\u00ee\u0007",
    "e\u0002\u0002\u00ee\u00fb\u0007j\u0002\u0002\u00ef\u00f0\u0007h\u0002",
    "\u0002\u00f0\u00f1\u0007q\u0002\u0002\u00f1\u00f2\u0007t\u0002\u0002",
    "\u00f2\u00f3\u0007G\u0002\u0002\u00f3\u00f4\u0007c\u0002\u0002\u00f4",
    "\u00f5\u0007e\u0002\u0002\u00f5\u00fb\u0007j\u0002\u0002\u00f6\u00f7",
    "\u0007n\u0002\u0002\u00f7\u00f8\u0007q\u0002\u0002\u00f8\u00f9\u0007",
    "q\u0002\u0002\u00f9\u00fb\u0007r\u0002\u0002\u00fa\u00e0\u0003\u0002",
    "\u0002\u0002\u00fa\u00e5\u0003\u0002\u0002\u0002\u00fa\u00e8\u0003\u0002",
    "\u0002\u0002\u00fa\u00ef\u0003\u0002\u0002\u0002\u00fa\u00f6\u0003\u0002",
    "\u0002\u0002\u00fbE\u0003\u0002\u0002\u0002\u00fc\u00fd\u0007t\u0002",
    "\u0002\u00fd\u00fe\u0007g\u0002\u0002\u00fe\u00ff\u0007v\u0002\u0002",
    "\u00ff\u0100\u0007w\u0002\u0002\u0100\u0101\u0007t\u0002\u0002\u0101",
    "\u0102\u0007p\u0002\u0002\u0102G\u0003\u0002\u0002\u0002\u0103\u0104",
    "\u0007p\u0002\u0002\u0104\u0105\u0007g\u0002\u0002\u0105\u0106\u0007",
    "y\u0002\u0002\u0106I\u0003\u0002\u0002\u0002\u0107\u0108\u0007U\u0002",
    "\u0002\u0108\u0109\u0007v\u0002\u0002\u0109\u010a\u0007c\u0002\u0002",
    "\u010a\u010b\u0007t\u0002\u0002\u010b\u010c\u0007v\u0002\u0002\u010c",
    "\u010d\u0007g\u0002\u0002\u010d\u0116\u0007t\u0002\u0002\u010e\u010f",
    "\u0007u\u0002\u0002\u010f\u0110\u0007v\u0002\u0002\u0110\u0111\u0007",
    "c\u0002\u0002\u0111\u0112\u0007t\u0002\u0002\u0112\u0113\u0007v\u0002",
    "\u0002\u0113\u0114\u0007g\u0002\u0002\u0114\u0116\u0007t\u0002\u0002",
    "\u0115\u0107\u0003\u0002\u0002\u0002\u0115\u010e\u0003\u0002\u0002\u0002",
    "\u0116K\u0003\u0002\u0002\u0002\u0117\u0118\u0007V\u0002\u0002\u0118",
    "\u0119\u0007j\u0002\u0002\u0119\u011a\u0007g\u0002\u0002\u011a\u011b",
    "\u0007o\u0002\u0002\u011b\u011c\u0007g\u0002\u0002\u011cM\u0003\u0002",
    "\u0002\u0002\u011d\u011e\u0007r\u0002\u0002\u011e\u011f\u0007c\u0002",
    "\u0002\u011f\u0120\u0007t\u0002\u0002\u0120O\u0003\u0002\u0002\u0002",
    "\u0121\u0122\u0007i\u0002\u0002\u0122\u0123\u0007t\u0002\u0002\u0123",
    "\u0124\u0007q\u0002\u0002\u0124\u0125\u0007w\u0002\u0002\u0125\u0126",
    "\u0007r\u0002\u0002\u0126Q\u0003\u0002\u0002\u0002\u0127\u0128\u0007",
    "q\u0002\u0002\u0128\u0129\u0007r\u0002\u0002\u0129\u012a\u0007v\u0002",
    "\u0002\u012aS\u0003\u0002\u0002\u0002\u012b\u012c\u0007c\u0002\u0002",
    "\u012c\u012d\u0007u\u0002\u0002\u012dU\u0003\u0002\u0002\u0002\u012e",
    "\u012f\u0007B\u0002\u0002\u012f\u0130\u0007c\u0002\u0002\u0130\u0131",
    "\u0007e\u0002\u0002\u0131\u0132\u0007v\u0002\u0002\u0132\u0133\u0007",
    "q\u0002\u0002\u0133\u013b\u0007t\u0002\u0002\u0134\u0135\u0007B\u0002",
    "\u0002\u0135\u0136\u0007C\u0002\u0002\u0136\u0137\u0007e\u0002\u0002",
    "\u0137\u0138\u0007v\u0002\u0002\u0138\u0139\u0007q\u0002\u0002\u0139",
    "\u013b\u0007t\u0002\u0002\u013a\u012e\u0003\u0002\u0002\u0002\u013a",
    "\u0134\u0003\u0002\u0002\u0002\u013bW\u0003\u0002\u0002\u0002\u013c",
    "\u013d\u0007B\u0002\u0002\u013d\u013e\u0007d\u0002\u0002\u013e\u013f",
    "\u0007q\u0002\u0002\u013f\u0140\u0007w\u0002\u0002\u0140\u0141\u0007",
    "p\u0002\u0002\u0141\u0142\u0007f\u0002\u0002\u0142\u0143\u0007c\u0002",
    "\u0002\u0143\u0144\u0007t\u0002\u0002\u0144\u014f\u0007{\u0002\u0002",
    "\u0145\u0146\u0007B\u0002\u0002\u0146\u0147\u0007D\u0002\u0002\u0147",
    "\u0148\u0007q\u0002\u0002\u0148\u0149\u0007w\u0002\u0002\u0149\u014a",
    "\u0007p\u0002\u0002\u014a\u014b\u0007f\u0002\u0002\u014b\u014c\u0007",
    "c\u0002\u0002\u014c\u014d\u0007t\u0002\u0002\u014d\u014f\u0007{\u0002",
    "\u0002\u014e\u013c\u0003\u0002\u0002\u0002\u014e\u0145\u0003\u0002\u0002",
    "\u0002\u014fY\u0003\u0002\u0002\u0002\u0150\u0151\u0007B\u0002\u0002",
    "\u0151\u0152\u0007e\u0002\u0002\u0152\u0153\u0007q\u0002\u0002\u0153",
    "\u0154\u0007n\u0002\u0002\u0154\u0155\u0007n\u0002\u0002\u0155\u0156",
    "\u0007g\u0002\u0002\u0156\u0157\u0007e\u0002\u0002\u0157\u0158\u0007",
    "v\u0002\u0002\u0158\u0159\u0007k\u0002\u0002\u0159\u015a\u0007q\u0002",
    "\u0002\u015a\u0167\u0007p\u0002\u0002\u015b\u015c\u0007B\u0002\u0002",
    "\u015c\u015d\u0007E\u0002\u0002\u015d\u015e\u0007q\u0002\u0002\u015e",
    "\u015f\u0007n\u0002\u0002\u015f\u0160\u0007n\u0002\u0002\u0160\u0161",
    "\u0007g\u0002\u0002\u0161\u0162\u0007e\u0002\u0002\u0162\u0163\u0007",
    "v\u0002\u0002\u0163\u0164\u0007k\u0002\u0002\u0164\u0165\u0007q\u0002",
    "\u0002\u0165\u0167\u0007p\u0002\u0002\u0166\u0150\u0003\u0002\u0002",
    "\u0002\u0166\u015b\u0003\u0002\u0002\u0002\u0167[\u0003\u0002\u0002",
    "\u0002\u0168\u0169\u0007B\u0002\u0002\u0169\u016a\u0007e\u0002\u0002",
    "\u016a\u016b\u0007q\u0002\u0002\u016b\u016c\u0007p\u0002\u0002\u016c",
    "\u016d\u0007v\u0002\u0002\u016d\u016e\u0007t\u0002\u0002\u016e\u016f",
    "\u0007q\u0002\u0002\u016f\u0179\u0007n\u0002\u0002\u0170\u0171\u0007",
    "B\u0002\u0002\u0171\u0172\u0007E\u0002\u0002\u0172\u0173\u0007q\u0002",
    "\u0002\u0173\u0174\u0007p\u0002\u0002\u0174\u0175\u0007v\u0002\u0002",
    "\u0175\u0176\u0007t\u0002\u0002\u0176\u0177\u0007q\u0002\u0002\u0177",
    "\u0179\u0007n\u0002\u0002\u0178\u0168\u0003\u0002\u0002\u0002\u0178",
    "\u0170\u0003\u0002\u0002\u0002\u0179]\u0003\u0002\u0002\u0002\u017a",
    "\u017b\u0007B\u0002\u0002\u017b\u017c\u0007f\u0002\u0002\u017c\u017d",
    "\u0007c\u0002\u0002\u017d\u017e\u0007v\u0002\u0002\u017e\u017f\u0007",
    "c\u0002\u0002\u017f\u0180\u0007d\u0002\u0002\u0180\u0181\u0007c\u0002",
    "\u0002\u0181\u0182\u0007u\u0002\u0002\u0182\u018d\u0007g\u0002\u0002",
    "\u0183\u0184\u0007B\u0002\u0002\u0184\u0185\u0007F\u0002\u0002\u0185",
    "\u0186\u0007c\u0002\u0002\u0186\u0187\u0007v\u0002\u0002\u0187\u0188",
    "\u0007c\u0002\u0002\u0188\u0189\u0007d\u0002\u0002\u0189\u018a\u0007",
    "c\u0002\u0002\u018a\u018b\u0007u\u0002\u0002\u018b\u018d\u0007g\u0002",
    "\u0002\u018c\u017a\u0003\u0002\u0002\u0002\u018c\u0183\u0003\u0002\u0002",
    "\u0002\u018d_\u0003\u0002\u0002\u0002\u018e\u018f\u0007B\u0002\u0002",
    "\u018f\u0190\u0007g\u0002\u0002\u0190\u0191\u0007p\u0002\u0002\u0191",
    "\u0192\u0007v\u0002\u0002\u0192\u0193\u0007k\u0002\u0002\u0193\u0194",
    "\u0007v\u0002\u0002\u0194\u019d\u0007{\u0002\u0002\u0195\u0196\u0007",
    "B\u0002\u0002\u0196\u0197\u0007G\u0002\u0002\u0197\u0198\u0007p\u0002",
    "\u0002\u0198\u0199\u0007v\u0002\u0002\u0199\u019a\u0007k\u0002\u0002",
    "\u019a\u019b\u0007v\u0002\u0002\u019b\u019d\u0007{\u0002\u0002\u019c",
    "\u018e\u0003\u0002\u0002\u0002\u019c\u0195\u0003\u0002\u0002\u0002\u019d",
    "a\u0003\u0002\u0002\u0002\u019e\u019f\u0007B\u0002\u0002\u019f\u01a0",
    "\u0007s\u0002\u0002\u01a0\u01a1\u0007w\u0002\u0002\u01a1\u01a2\u0007",
    "g\u0002\u0002\u01a2\u01a3\u0007w\u0002\u0002\u01a3\u01ab\u0007g\u0002",
    "\u0002\u01a4\u01a5\u0007B\u0002\u0002\u01a5\u01a6\u0007S\u0002\u0002",
    "\u01a6\u01a7\u0007w\u0002\u0002\u01a7\u01a8\u0007g\u0002\u0002\u01a8",
    "\u01a9\u0007w\u0002\u0002\u01a9\u01ab\u0007g\u0002\u0002\u01aa\u019e",
    "\u0003\u0002\u0002\u0002\u01aa\u01a4\u0003\u0002\u0002\u0002\u01abc",
    "\u0003\u0002\u0002\u0002\u01ac\u01ad\u0007B\u0002\u0002\u01ad\u01ae",
    "\u0007G\u0002\u0002\u01ae\u01af\u0007E\u0002\u0002\u01af\u01b9\u0007",
    "4\u0002\u0002\u01b0\u01b1\u0007B\u0002\u0002\u01b1\u01b2\u0007G\u0002",
    "\u0002\u01b2\u01b3\u0007e\u0002\u0002\u01b3\u01b9\u00074\u0002\u0002",
    "\u01b4\u01b5\u0007B\u0002\u0002\u01b5\u01b6\u0007g\u0002\u0002\u01b6",
    "\u01b7\u0007e\u0002\u0002\u01b7\u01b9\u00074\u0002\u0002\u01b8\u01ac",
    "\u0003\u0002\u0002\u0002\u01b8\u01b0\u0003\u0002\u0002\u0002\u01b8\u01b4",
    "\u0003\u0002\u0002\u0002\u01b9e\u0003\u0002\u0002\u0002\u01ba\u01bb",
    "\u0007B\u0002\u0002\u01bb\u01bc\u0007G\u0002\u0002\u01bc\u01bd\u0007",
    "E\u0002\u0002\u01bd\u01c7\u0007U\u0002\u0002\u01be\u01bf\u0007B\u0002",
    "\u0002\u01bf\u01c0\u0007G\u0002\u0002\u01c0\u01c1\u0007e\u0002\u0002",
    "\u01c1\u01c7\u0007u\u0002\u0002\u01c2\u01c3\u0007B\u0002\u0002\u01c3",
    "\u01c4\u0007g\u0002\u0002\u01c4\u01c5\u0007e\u0002\u0002\u01c5\u01c7",
    "\u0007u\u0002\u0002\u01c6\u01ba\u0003\u0002\u0002\u0002\u01c6\u01be",
    "\u0003\u0002\u0002\u0002\u01c6\u01c2\u0003\u0002\u0002\u0002\u01c7g",
    "\u0003\u0002\u0002\u0002\u01c8\u01c9\u0007B\u0002\u0002\u01c9\u01ca",
    "\u0007K\u0002\u0002\u01ca\u01cb\u0007C\u0002\u0002\u01cb\u01d5\u0007",
    "O\u0002\u0002\u01cc\u01cd\u0007B\u0002\u0002\u01cd\u01ce\u0007K\u0002",
    "\u0002\u01ce\u01cf\u0007c\u0002\u0002\u01cf\u01d5\u0007o\u0002\u0002",
    "\u01d0\u01d1\u0007B\u0002\u0002\u01d1\u01d2\u0007k\u0002\u0002\u01d2",
    "\u01d3\u0007c\u0002\u0002\u01d3\u01d5\u0007o\u0002\u0002\u01d4\u01c8",
    "\u0003\u0002\u0002\u0002\u01d4\u01cc\u0003\u0002\u0002\u0002\u01d4\u01d0",
    "\u0003\u0002\u0002\u0002\u01d5i\u0003\u0002\u0002\u0002\u01d6\u01d7",
    "\u0007B\u0002\u0002\u01d7\u01d8\u0007n\u0002\u0002\u01d8\u01d9\u0007",
    "c\u0002\u0002\u01d9\u01da\u0007o\u0002\u0002\u01da\u01db\u0007d\u0002",
    "\u0002\u01db\u01dc\u0007f\u0002\u0002\u01dc\u01e5\u0007c\u0002\u0002",
    "\u01dd\u01de\u0007B\u0002\u0002\u01de\u01df\u0007N\u0002\u0002\u01df",
    "\u01e0\u0007c\u0002\u0002\u01e0\u01e1\u0007o\u0002\u0002\u01e1\u01e2",
    "\u0007d\u0002\u0002\u01e2\u01e3\u0007f\u0002\u0002\u01e3\u01e5\u0007",
    "c\u0002\u0002\u01e4\u01d6\u0003\u0002\u0002\u0002\u01e4\u01dd\u0003",
    "\u0002\u0002\u0002\u01e5k\u0003\u0002\u0002\u0002\u01e6\u01e7\u0007",
    "B\u0002\u0002\u01e7\u01e8\u0007T\u0002\u0002\u01e8\u01e9\u0007F\u0002",
    "\u0002\u01e9\u01f3\u0007U\u0002\u0002\u01ea\u01eb\u0007B\u0002\u0002",
    "\u01eb\u01ec\u0007T\u0002\u0002\u01ec\u01ed\u0007f\u0002\u0002\u01ed",
    "\u01f3\u0007u\u0002\u0002\u01ee\u01ef\u0007B\u0002\u0002\u01ef\u01f0",
    "\u0007t\u0002\u0002\u01f0\u01f1\u0007f\u0002\u0002\u01f1\u01f3\u0007",
    "u\u0002\u0002\u01f2\u01e6\u0003\u0002\u0002\u0002\u01f2\u01ea\u0003",
    "\u0002\u0002\u0002\u01f2\u01ee\u0003\u0002\u0002\u0002\u01f3m\u0003",
    "\u0002\u0002\u0002\u01f4\u01f5\u0007B\u0002\u0002\u01f5\u01f6\u0007",
    "U\u0002\u0002\u01f6\u01fb\u00075\u0002\u0002\u01f7\u01f8\u0007B\u0002",
    "\u0002\u01f8\u01f9\u0007u\u0002\u0002\u01f9\u01fb\u00075\u0002\u0002",
    "\u01fa\u01f4\u0003\u0002\u0002\u0002\u01fa\u01f7\u0003\u0002\u0002\u0002",
    "\u01fbo\u0003\u0002\u0002\u0002\u01fc\u01fd\u00070\u0002\u0002\u01fd",
    "q\u0003\u0002\u0002\u0002\u01fe\u0202\t\u0002\u0002\u0002\u01ff\u0201",
    "\t\u0003\u0002\u0002\u0200\u01ff\u0003\u0002\u0002\u0002\u0201\u0204",
    "\u0003\u0002\u0002\u0002\u0202\u0200\u0003\u0002\u0002\u0002\u0202\u0203",
    "\u0003\u0002\u0002\u0002\u0203s\u0003\u0002\u0002\u0002\u0204\u0202",
    "\u0003\u0002\u0002\u0002\u0205\u0207\t\u0004\u0002\u0002\u0206\u0205",
    "\u0003\u0002\u0002\u0002\u0207\u0208\u0003\u0002\u0002\u0002\u0208\u0206",
    "\u0003\u0002\u0002\u0002\u0208\u0209\u0003\u0002\u0002\u0002\u0209u",
    "\u0003\u0002\u0002\u0002\u020a\u020c\t\u0004\u0002\u0002\u020b\u020a",
    "\u0003\u0002\u0002\u0002\u020c\u020d\u0003\u0002\u0002\u0002\u020d\u020b",
    "\u0003\u0002\u0002\u0002\u020d\u020e\u0003\u0002\u0002\u0002\u020e\u020f",
    "\u0003\u0002\u0002\u0002\u020f\u0213\u00070\u0002\u0002\u0210\u0212",
    "\t\u0004\u0002\u0002\u0211\u0210\u0003\u0002\u0002\u0002\u0212\u0215",
    "\u0003\u0002\u0002\u0002\u0213\u0211\u0003\u0002\u0002\u0002\u0213\u0214",
    "\u0003\u0002\u0002\u0002\u0214\u021d\u0003\u0002\u0002\u0002\u0215\u0213",
    "\u0003\u0002\u0002\u0002\u0216\u0218\u00070\u0002\u0002\u0217\u0219",
    "\t\u0004\u0002\u0002\u0218\u0217\u0003\u0002\u0002\u0002\u0219\u021a",
    "\u0003\u0002\u0002\u0002\u021a\u0218\u0003\u0002\u0002\u0002\u021a\u021b",
    "\u0003\u0002\u0002\u0002\u021b\u021d\u0003\u0002\u0002\u0002\u021c\u020b",
    "\u0003\u0002\u0002\u0002\u021c\u0216\u0003\u0002\u0002\u0002\u021dw",
    "\u0003\u0002\u0002\u0002\u021e\u0224\u0007$\u0002\u0002\u021f\u0223",
    "\n\u0005\u0002\u0002\u0220\u0221\u0007$\u0002\u0002\u0221\u0223\u0007",
    "$\u0002\u0002\u0222\u021f\u0003\u0002\u0002\u0002\u0222\u0220\u0003",
    "\u0002\u0002\u0002\u0223\u0226\u0003\u0002\u0002\u0002\u0224\u0222\u0003",
    "\u0002\u0002\u0002\u0224\u0225\u0003\u0002\u0002\u0002\u0225\u0228\u0003",
    "\u0002\u0002\u0002\u0226\u0224\u0003\u0002\u0002\u0002\u0227\u0229\t",
    "\u0005\u0002\u0002\u0228\u0227\u0003\u0002\u0002\u0002\u0228\u0229\u0003",
    "\u0002\u0002\u0002\u0229y\u0003\u0002\u0002\u0002\u022a\u022b\t\u0006",
    "\u0002\u0002\u022b\u022c\u0003\u0002\u0002\u0002\u022c\u022d\b=\u0003",
    "\u0002\u022d{\u0003\u0002\u0002\u0002\u022e\u022f\t\u0007\u0002\u0002",
    "\u022f\u0230\u0003\u0002\u0002\u0002\u0230\u0231\b>\u0003\u0002\u0231",
    "}\u0003\u0002\u0002\u0002\u0232\u0233\u00071\u0002\u0002\u0233\u0234",
    "\u00071\u0002\u0002\u0234\u0238\u0003\u0002\u0002\u0002\u0235\u0237",
    "\u000b\u0002\u0002\u0002\u0236\u0235\u0003\u0002\u0002\u0002\u0237\u023a",
    "\u0003\u0002\u0002\u0002\u0238\u0239\u0003\u0002\u0002\u0002\u0238\u0236",
    "\u0003\u0002\u0002\u0002\u0239\u023b\u0003\u0002\u0002\u0002\u023a\u0238",
    "\u0003\u0002\u0002\u0002\u023b\u023c\u0007\f\u0002\u0002\u023c\u023d",
    "\u0003\u0002\u0002\u0002\u023d\u023e\b?\u0004\u0002\u023e\u007f\u0003",
    "\u0002\u0002\u0002\u023f\u0240\u000b\u0002\u0002\u0002\u0240\u0081\u0003",
    "\u0002\u0002\u0002\u0241\u0243\n\u0006\u0002\u0002\u0242\u0241\u0003",
    "\u0002\u0002\u0002\u0243\u0244\u0003\u0002\u0002\u0002\u0244\u0242\u0003",
    "\u0002\u0002\u0002\u0244\u0245\u0003\u0002\u0002\u0002\u0245\u0083\u0003",
    "\u0002\u0002\u0002\u0246\u0247\t\u0006\u0002\u0002\u0247\u0248\u0003",
    "\u0002\u0002\u0002\u0248\u0249\bB\u0005\u0002\u0249\u0085\u0003\u0002",
    "\u0002\u0002\u024a\u024b\t\b\u0002\u0002\u024b\u024c\u0003\u0002\u0002",
    "\u0002\u024c\u024d\bC\u0003\u0002\u024d\u0087\u0003\u0002\u0002\u0002",
    "\u001e\u0002\u0003\u00fa\u0115\u013a\u014e\u0166\u0178\u018c\u019c\u01aa",
    "\u01b8\u01c6\u01d4\u01e4\u01f2\u01fa\u0202\u0208\u020d\u0213\u021a\u021c",
    "\u0222\u0224\u0228\u0238\u0244\u0006\u0007\u0003\u0002\u0002\u0003\u0002",
    "\u0002\u0004\u0002\u0006\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function sequenceLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

sequenceLexer.prototype = Object.create(antlr4.Lexer.prototype);
sequenceLexer.prototype.constructor = sequenceLexer;

Object.defineProperty(sequenceLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

sequenceLexer.EOF = antlr4.Token.EOF;
sequenceLexer.COL = 1;
sequenceLexer.SOPEN = 2;
sequenceLexer.SCLOSE = 3;
sequenceLexer.ARROW = 4;
sequenceLexer.AT = 5;
sequenceLexer.OR = 6;
sequenceLexer.AND = 7;
sequenceLexer.EQ = 8;
sequenceLexer.NEQ = 9;
sequenceLexer.GT = 10;
sequenceLexer.LT = 11;
sequenceLexer.GTEQ = 12;
sequenceLexer.LTEQ = 13;
sequenceLexer.PLUS = 14;
sequenceLexer.MINUS = 15;
sequenceLexer.MULT = 16;
sequenceLexer.DIV = 17;
sequenceLexer.MOD = 18;
sequenceLexer.POW = 19;
sequenceLexer.NOT = 20;
sequenceLexer.SCOL = 21;
sequenceLexer.COMMA = 22;
sequenceLexer.ASSIGN = 23;
sequenceLexer.OPAR = 24;
sequenceLexer.CPAR = 25;
sequenceLexer.OBRACE = 26;
sequenceLexer.CBRACE = 27;
sequenceLexer.TRUE = 28;
sequenceLexer.FALSE = 29;
sequenceLexer.NIL = 30;
sequenceLexer.IF = 31;
sequenceLexer.ELSE = 32;
sequenceLexer.WHILE = 33;
sequenceLexer.RETURN = 34;
sequenceLexer.NEW = 35;
sequenceLexer.STARTER_LXR = 36;
sequenceLexer.THEME_LXR = 37;
sequenceLexer.PAR = 38;
sequenceLexer.GROUP = 39;
sequenceLexer.OPT = 40;
sequenceLexer.AS = 41;
sequenceLexer.ACTOR = 42;
sequenceLexer.BOUNDARY = 43;
sequenceLexer.COLLECTION = 44;
sequenceLexer.CONTROL = 45;
sequenceLexer.DATABASE = 46;
sequenceLexer.ENTITY = 47;
sequenceLexer.QUEUE = 48;
sequenceLexer.EC2 = 49;
sequenceLexer.ECS = 50;
sequenceLexer.IAM = 51;
sequenceLexer.LAMBDA = 52;
sequenceLexer.RDS = 53;
sequenceLexer.S3 = 54;
sequenceLexer.DOT = 55;
sequenceLexer.ID = 56;
sequenceLexer.INT = 57;
sequenceLexer.FLOAT = 58;
sequenceLexer.STRING = 59;
sequenceLexer.CR = 60;
sequenceLexer.SPACE = 61;
sequenceLexer.COMMENT = 62;
sequenceLexer.OTHER = 63;
sequenceLexer.EVENT_PAYLOAD_LXR = 64;
sequenceLexer.EVENT_END = 65;
sequenceLexer.WS = 66;

sequenceLexer.COMMENT_CHANNEL = 2;

sequenceLexer.EVENT = 1;

sequenceLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN", 
                                                                            "COMMENT_CHANNEL" ];

sequenceLexer.prototype.modeNames = [ "DEFAULT_MODE", "EVENT" ];

sequenceLexer.prototype.literalNames = [ null, "':'", "'<<'", "'>>'", "'->'", 
                                         "'@'", "'||'", "'&&'", "'=='", 
                                         "'!='", "'>'", "'<'", "'>='", "'<='", 
                                         "'+'", "'-'", "'*'", "'/'", "'%'", 
                                         "'^'", "'!'", "';'", "','", "'='", 
                                         "'('", "')'", "'{'", "'}'", "'true'", 
                                         "'false'", "'nil'", "'if'", "'else'", 
                                         null, "'return'", "'new'", null, 
                                         "'Theme'", "'par'", "'group'", 
                                         "'opt'", "'as'", null, null, null, 
                                         null, null, null, null, null, null, 
                                         null, null, null, null, "'.'" ];

sequenceLexer.prototype.symbolicNames = [ null, "COL", "SOPEN", "SCLOSE", 
                                          "ARROW", "AT", "OR", "AND", "EQ", 
                                          "NEQ", "GT", "LT", "GTEQ", "LTEQ", 
                                          "PLUS", "MINUS", "MULT", "DIV", 
                                          "MOD", "POW", "NOT", "SCOL", "COMMA", 
                                          "ASSIGN", "OPAR", "CPAR", "OBRACE", 
                                          "CBRACE", "TRUE", "FALSE", "NIL", 
                                          "IF", "ELSE", "WHILE", "RETURN", 
                                          "NEW", "STARTER_LXR", "THEME_LXR", 
                                          "PAR", "GROUP", "OPT", "AS", "ACTOR", 
                                          "BOUNDARY", "COLLECTION", "CONTROL", 
                                          "DATABASE", "ENTITY", "QUEUE", 
                                          "EC2", "ECS", "IAM", "LAMBDA", 
                                          "RDS", "S3", "DOT", "ID", "INT", 
                                          "FLOAT", "STRING", "CR", "SPACE", 
                                          "COMMENT", "OTHER", "EVENT_PAYLOAD_LXR", 
                                          "EVENT_END", "WS" ];

sequenceLexer.prototype.ruleNames = [ "COL", "SOPEN", "SCLOSE", "ARROW", 
                                      "AT", "OR", "AND", "EQ", "NEQ", "GT", 
                                      "LT", "GTEQ", "LTEQ", "PLUS", "MINUS", 
                                      "MULT", "DIV", "MOD", "POW", "NOT", 
                                      "SCOL", "COMMA", "ASSIGN", "OPAR", 
                                      "CPAR", "OBRACE", "CBRACE", "TRUE", 
                                      "FALSE", "NIL", "IF", "ELSE", "WHILE", 
                                      "RETURN", "NEW", "STARTER_LXR", "THEME_LXR", 
                                      "PAR", "GROUP", "OPT", "AS", "ACTOR", 
                                      "BOUNDARY", "COLLECTION", "CONTROL", 
                                      "DATABASE", "ENTITY", "QUEUE", "EC2", 
                                      "ECS", "IAM", "LAMBDA", "RDS", "S3", 
                                      "DOT", "ID", "INT", "FLOAT", "STRING", 
                                      "CR", "SPACE", "COMMENT", "OTHER", 
                                      "EVENT_PAYLOAD_LXR", "EVENT_END", 
                                      "WS" ];

sequenceLexer.prototype.grammarFileName = "sequenceLexer.g4";


exports.sequenceLexer = sequenceLexer;

