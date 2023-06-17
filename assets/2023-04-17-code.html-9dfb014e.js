const n=JSON.parse(`{"key":"v-56a857b2","path":"/works/homeworks/2023-04-17-code.html","title":"长期更新-c语言作业","lang":"zh-CN","frontmatter":{"title":"长期更新-c语言作业","date":"2023-04-25T00:00:00.000Z","category":["作业"],"tag":["代码","作业"],"order":-2,"description":"习题一 字母统计 任意给定一个字符串，字符串中包含除了空白符、换行符之外的的任意字符。你的任务是统计出现在该字符串中的各字母（即“A—Z”，“a—z”）的个数(区分大小写)。 #include &lt;stdio.h&gt; int main(void) { int str[100] = {}; int i = 0, c; int num[52]; for (i = 0; i &lt;= 99; i++) { str[i] = 0; } for (i = 0; i &lt;= 51; i++) { num[i] = 0; } i = 0; while ((c = getchar()) != EOF) { str[i++] = c; } for (int n = 'a'; n &lt;= 'z'; n++) { for (i = 0; str[i] != 0; i++) { if (str[i] == n) { num[n - 'a' + 26]++; } } } for (int n = 'A'; n &lt;= 'Z'; n++) { for (i = 0; str[i] != 0; i++) { if (str[i] == n) { num[n - 'A']++; } } } for (i = 0; i &lt;= 25; i++) { if (num[i] != 0) { printf(\\"The character %c has presented %d times.\\\\n\\", i + 'A', num[i]); } } for (i = 26; i &lt;= 51; i++) { if (num[i] != 0) { printf(\\"The character %c has presented %d times.\\\\n\\", i + 'a' - 26, num[i]); } } return 0; }","head":[["meta",{"property":"og:url","content":"https://opaimon.github.io/works/homeworks/2023-04-17-code.html"}],["meta",{"property":"og:site_name","content":"派蒙的笔记与博客"}],["meta",{"property":"og:title","content":"长期更新-c语言作业"}],["meta",{"property":"og:description","content":"习题一 字母统计 任意给定一个字符串，字符串中包含除了空白符、换行符之外的的任意字符。你的任务是统计出现在该字符串中的各字母（即“A—Z”，“a—z”）的个数(区分大小写)。 #include &lt;stdio.h&gt; int main(void) { int str[100] = {}; int i = 0, c; int num[52]; for (i = 0; i &lt;= 99; i++) { str[i] = 0; } for (i = 0; i &lt;= 51; i++) { num[i] = 0; } i = 0; while ((c = getchar()) != EOF) { str[i++] = c; } for (int n = 'a'; n &lt;= 'z'; n++) { for (i = 0; str[i] != 0; i++) { if (str[i] == n) { num[n - 'a' + 26]++; } } } for (int n = 'A'; n &lt;= 'Z'; n++) { for (i = 0; str[i] != 0; i++) { if (str[i] == n) { num[n - 'A']++; } } } for (i = 0; i &lt;= 25; i++) { if (num[i] != 0) { printf(\\"The character %c has presented %d times.\\\\n\\", i + 'A', num[i]); } } for (i = 26; i &lt;= 51; i++) { if (num[i] != 0) { printf(\\"The character %c has presented %d times.\\\\n\\", i + 'a' - 26, num[i]); } } return 0; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-17T10:17:24.000Z"}],["meta",{"property":"article:author","content":"观赏用派蒙"}],["meta",{"property":"article:tag","content":"代码"}],["meta",{"property":"article:tag","content":"作业"}],["meta",{"property":"article:published_time","content":"2023-04-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-17T10:17:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"长期更新-c语言作业\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-25T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-17T10:17:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"观赏用派蒙\\",\\"url\\":\\"opaimon.github.io\\",\\"email\\":\\"paimoe@bupt.edu.cn\\"}]}"]]},"headers":[{"level":3,"title":"习题一 字母统计","slug":"习题一-字母统计","link":"#习题一-字母统计","children":[]},{"level":3,"title":"习题二 单位变换二","slug":"习题二-单位变换二","link":"#习题二-单位变换二","children":[]},{"level":3,"title":"习题三 身份证号码最后一位","slug":"习题三-身份证号码最后一位","link":"#习题三-身份证号码最后一位","children":[]},{"level":3,"title":"习题四 最长对称子串","slug":"习题四-最长对称子串","link":"#习题四-最长对称子串","children":[]},{"level":3,"title":"习题五 个位数统计","slug":"习题五-个位数统计","link":"#习题五-个位数统计","children":[]},{"level":3,"title":"6-1 实验5_1_设计函数fun","slug":"_6-1-实验5-1-设计函数fun","link":"#_6-1-实验5-1-设计函数fun","children":[]},{"level":3,"title":"6-2 实验5_3_设计函数getDays","slug":"_6-2-实验5-3-设计函数getdays","link":"#_6-2-实验5-3-设计函数getdays","children":[]},{"level":3,"title":"6-3 实验5_4_设计函数getDigit","slug":"_6-3-实验5-4-设计函数getdigit","link":"#_6-3-实验5-4-设计函数getdigit","children":[]},{"level":3,"title":"6-4 实验5_5_设计函数reverseNum","slug":"_6-4-实验5-5-设计函数reversenum","link":"#_6-4-实验5-5-设计函数reversenum","children":[]},{"level":3,"title":"6-5 实验5_6_设计函数mypow","slug":"_6-5-实验5-6-设计函数mypow","link":"#_6-5-实验5-6-设计函数mypow","children":[]},{"level":3,"title":"7-1 实验9_4_句子输出","slug":"_7-1-实验9-4-句子输出","link":"#_7-1-实验9-4-句子输出","children":[]}],"git":{"createdTime":1686997044000,"updatedTime":1686997044000,"contributors":[{"name":"OPaimon","email":"chengsheng.wu1014@gmail.com","commits":1}]},"readingTime":{"minutes":5.67,"words":1702},"filePathRelative":"works/homeworks/2023-04-17-code.md","localizedDate":"2023年4月25日","excerpt":"<h3> 习题一 字母统计</h3>\\n<p>任意给定一个字符串，字符串中包含除了空白符、换行符之外的的任意字符。你的任务是统计出现在该字符串中的各字母（即“A—Z”，“a—z”）的个数(区分大小写)。</p>\\n<div class=\\"language-c line-numbers-mode\\" data-ext=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;stdio.h&gt;</span></span>\\n\\n<span class=\\"token keyword\\">int</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">void</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">int</span> str<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">100</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> c<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">int</span> num<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">52</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span>i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;=</span> <span class=\\"token number\\">99</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        str<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span>i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;=</span> <span class=\\"token number\\">51</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        num<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span>c <span class=\\"token operator\\">=</span> <span class=\\"token function\\">getchar</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">!=</span> <span class=\\"token constant\\">EOF</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        str<span class=\\"token punctuation\\">[</span>i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> c<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> n <span class=\\"token operator\\">=</span> <span class=\\"token char\\">'a'</span><span class=\\"token punctuation\\">;</span> n <span class=\\"token operator\\">&lt;=</span> <span class=\\"token char\\">'z'</span><span class=\\"token punctuation\\">;</span> n<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span>i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> str<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">!=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>str<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">==</span> n<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                num<span class=\\"token punctuation\\">[</span>n <span class=\\"token operator\\">-</span> <span class=\\"token char\\">'a'</span> <span class=\\"token operator\\">+</span> <span class=\\"token number\\">26</span><span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> n <span class=\\"token operator\\">=</span> <span class=\\"token char\\">'A'</span><span class=\\"token punctuation\\">;</span> n <span class=\\"token operator\\">&lt;=</span> <span class=\\"token char\\">'Z'</span><span class=\\"token punctuation\\">;</span> n<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span>i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> str<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">!=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>str<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">==</span> n<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                num<span class=\\"token punctuation\\">[</span>n <span class=\\"token operator\\">-</span> <span class=\\"token char\\">'A'</span><span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span>i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;=</span> <span class=\\"token number\\">25</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>num<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">!=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"The character %c has presented %d times.\\\\n\\"</span><span class=\\"token punctuation\\">,</span> i <span class=\\"token operator\\">+</span> <span class=\\"token char\\">'A'</span><span class=\\"token punctuation\\">,</span>\\n                   num<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span>i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">26</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;=</span> <span class=\\"token number\\">51</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>num<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">!=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"The character %c has presented %d times.\\\\n\\"</span><span class=\\"token punctuation\\">,</span> i <span class=\\"token operator\\">+</span> <span class=\\"token char\\">'a'</span> <span class=\\"token operator\\">-</span> <span class=\\"token number\\">26</span><span class=\\"token punctuation\\">,</span>\\n                   num<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
