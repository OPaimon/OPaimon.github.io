import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-a8e94579.js";const t={},i=e(`<h2 id="实验10-8-设计函数-void-delcharfun-char-str-char-ch" tabindex="-1"><a class="header-anchor" href="#实验10-8-设计函数-void-delcharfun-char-str-char-ch" aria-hidden="true">#</a> 实验10_8_设计函数 void delcharfun(char *str,char ch)</h2><p>设计函数 void delcharfun(char *str,char ch)实现从字符串str中删除指定的字符ch。同一字母的大、小写按不同字符处理。</p><h3 id="函数接口定义" tabindex="-1"><a class="header-anchor" href="#函数接口定义" aria-hidden="true">#</a> 函数接口定义：</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>void delcharfun(char *str,char ch);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中 <code>str</code> 和 <code>ch</code> 都是用户传入的参数。 <code>str</code> 为指向待删除数组的指针； <code>ch</code> 指定字符。函数没有返回值。</p><h3 id="裁判测试程序样例" tabindex="-1"><a class="header-anchor" href="#裁判测试程序样例" aria-hidden="true">#</a> 裁判测试程序样例：</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include&lt;stdio.h&gt;

void delcharfun(char *str,char ch);
 
int main()
{
	char	ch,str[110];
	
	scanf(&quot;%s&quot;,str);	//读入字符串 
	getchar();			//读取回车符号 
	scanf(&quot;%c&quot;,&amp;ch);	//读入字符 
	delcharfun(str,ch);	//删除 
	printf(&quot;%s\\n&quot;,str);	//输出删除后结果 
	return 0;	
}

/* 请在这里填写答案 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输入样例" tabindex="-1"><a class="header-anchor" href="#输入样例" aria-hidden="true">#</a> 输入样例：</h3><div class="language-in line-numbers-mode" data-ext="in"><pre class="language-in"><code>abcABCabc#
b

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输出样例" tabindex="-1"><a class="header-anchor" href="#输出样例" aria-hidden="true">#</a> 输出样例：</h3><div class="language-out line-numbers-mode" data-ext="out"><pre class="language-out"><code>acABCac#

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案：</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">delcharfun</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>str<span class="token punctuation">,</span><span class="token keyword">char</span> ch<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span>j<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">!=</span><span class="token char">&#39;\\0&#39;</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span>ch<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span>j<span class="token operator">=</span>i<span class="token punctuation">;</span>str<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">!=</span><span class="token char">&#39;\\0&#39;</span><span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                str<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span>str<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            i<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实验10-4-设计函数-locatesubstr" tabindex="-1"><a class="header-anchor" href="#实验10-4-设计函数-locatesubstr" aria-hidden="true">#</a> 实验10_4_设计函数 locatesubstr</h2><p>设计函数 char *locatesubstr(char *str1,char *str2)，查找str2指向的字符串在str1指向的字符串中首次出现的位置，返回指向该位置的指针。若str2指向的字符串不包含在str1指向的字符串中，则返回空指针NULL。<br> 注意这里必须使用指针而不是数组下标来访问字符串。</p><h3 id="函数接口定义-1" tabindex="-1"><a class="header-anchor" href="#函数接口定义-1" aria-hidden="true">#</a> 函数接口定义：</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>char *locatesubstr(char *str1,char *str2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中 <code>str1</code> 和 <code>str2</code> 都是用户传入的参数，其含义如题面所述 。若查找成功则返回指向该位置的指针，若失败则返回空指针。</p><h3 id="裁判测试程序样例-1" tabindex="-1"><a class="header-anchor" href="#裁判测试程序样例-1" aria-hidden="true">#</a> 裁判测试程序样例：</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;stdio.h&gt;

char *locatesubstr(char *str1,char *str2);
int main()
{
	char str1[505],str2[505];
	char *p;
	gets(str1);
	gets(str2);
	p=locatesubstr(str1,str2);
	
	if(p==NULL)	printf(&quot;NULL!\\n&quot;);
	else	puts(p);
	
	return 0;
}

/* 请在这里填写答案 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输入样例-1" tabindex="-1"><a class="header-anchor" href="#输入样例-1" aria-hidden="true">#</a> 输入样例：</h3><div class="language-in line-numbers-mode" data-ext="in"><pre class="language-in"><code>didjfsd dabcxxxxxx
abc

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输出样例-1" tabindex="-1"><a class="header-anchor" href="#输出样例-1" aria-hidden="true">#</a> 输出样例：</h3><div class="language-out line-numbers-mode" data-ext="out"><pre class="language-out"><code>abcxxxxxx

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="答案-1" tabindex="-1"><a class="header-anchor" href="#答案-1" aria-hidden="true">#</a> 答案：</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">char</span> <span class="token operator">*</span><span class="token function">locatesubstr</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>str1<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>str2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> temp <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> str1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> str1<span class="token punctuation">[</span>i <span class="token operator">+</span> j<span class="token punctuation">]</span> <span class="token operator">==</span> str2<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">&amp;&amp;</span>str2<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token operator">&amp;&amp;</span>str1<span class="token punctuation">[</span>i <span class="token operator">+</span>j<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    temp <span class="token operator">=</span> str2<span class="token punctuation">[</span>j <span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>temp <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>str1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据清洗" tabindex="-1"><a class="header-anchor" href="#数据清洗" aria-hidden="true">#</a> 数据清洗</h2><p>数据清洗是指发现并纠正数据文件中可识别的错误的最后一道程序，包括检查数据一致性，处理无效值和缺失值等。小明去某公司实习，公司交给了他一个数据清洗的任务。由于小明是实习生，所以数据清洗的算法公司已经给定，小明的任务仅仅是将清洗后合格的数据按原来的顺序存储并输出。可是小明仍无法完成这个任务，聪明的你能帮帮他吗？</p><p>数据清洗的函数原型为：</p><p>int dataCleaning(int n);</p><p>这里参数n为待处理数据，如果该数据是正确的函数则返回1，如果该数据不正确则函数返回0。在你的函数中需要调用这个函数（不需要实现，直接调用即可）来判断数据是否正确。</p><h3 id="函数接口定义-2" tabindex="-1"><a class="header-anchor" href="#函数接口定义-2" aria-hidden="true">#</a> 函数接口定义：</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int getData(int source[] , int size , int target[] );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中 <code>source</code> 、 <code>size</code> 和 <code>target</code> 都是用户传入的参数。 <code>source</code> 为待清洗数据； <code>size</code> 为数组<code>source</code>的长度； <code>target</code>为正确的数据。函数的返回值为正确数据的个数。</p><h3 id="裁判测试程序样例-2" tabindex="-1"><a class="header-anchor" href="#裁判测试程序样例-2" aria-hidden="true">#</a> 裁判测试程序样例：</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include&lt;stdio.h&gt;

int getData(int source[] , int size , int target[] );

int dataCleaning(int n);

int main()
{
	int		source[110] , target[110];
	int		i , n , size ;
	
	scanf( &quot;%d&quot;, &amp;n ) ;
	for ( i = 0 ; i &lt; n ; i++ )
		scanf( &quot;%d&quot;, &amp;source[i] ) ; 
	size = getData( source , n, target ) ; 
	for ( i = 0 ; i &lt; size - 1 ; i++ )
		printf( &quot;%d &quot; , target[i] ) ;
	printf( &quot;%d\\n&quot; , target[i] ) ;
	
	return 0;	
}

/* 请在这里填写答案 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输入样例-2" tabindex="-1"><a class="header-anchor" href="#输入样例-2" aria-hidden="true">#</a> 输入样例：</h3><div class="language-in line-numbers-mode" data-ext="in"><pre class="language-in"><code>10
62 58 20 69 92 4 99 67 12 88

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输出样例-2" tabindex="-1"><a class="header-anchor" href="#输出样例-2" aria-hidden="true">#</a> 输出样例：</h3><p>样例解释：输入的10个整数中只有69、99和12是正确的数据。</p><div class="language-out line-numbers-mode" data-ext="out"><pre class="language-out"><code>69 99 12

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="答案-2" tabindex="-1"><a class="header-anchor" href="#答案-2" aria-hidden="true">#</a> 答案：</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token keyword">int</span> source<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> size<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> temp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">dataCleaning</span><span class="token punctuation">(</span>source<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    target<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> source<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    temp <span class="token operator">=</span> j<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="递归求解之阿尔法乘积" tabindex="-1"><a class="header-anchor" href="#递归求解之阿尔法乘积" aria-hidden="true">#</a> 递归求解之阿尔法乘积</h2><p>计算一个整数的阿尔法乘积。对于一个整数x来说，它的阿尔法乘积是这样来计算的：如果x是一个个位数，那么它的阿尔法乘积就是它本身；否则的话，x的阿 尔法乘积就等于它的各位非0的数字相乘所得到的那个整数的阿尔法乘积。例如：4018224312的阿尔法乘积等于8，它是按照以下的步骤来计算的：</p><p><code>4018224312 → 4*1*8*2*2*4*3*1*2 → 3072 → 3*7*2 → 42 → 4*2 → 8</code></p><p>编写一个程序，输入一个正整数（该整数可以用long long 存储），输出它的阿尔法乘积。</p><p>输入格式：输入只有一行，即一个正整数。</p><p>输出格式：输出相应的阿尔法乘积。</p><p><strong>此题要求用递归函数实现，且不允许使用全局变量，其他方式不得分。</strong></p><h3 id="函数接口定义-3" tabindex="-1"><a class="header-anchor" href="#函数接口定义-3" aria-hidden="true">#</a> 函数接口定义：</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>long long alpha(long long n) ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中 <code>n</code> 是用户传入的参数。 <code>n</code> 的值不超过<code>long long</code>的范围。函数须返回 <code>n</code> 的阿尔法乘积。</p><h3 id="裁判测试程序样例-3" tabindex="-1"><a class="header-anchor" href="#裁判测试程序样例-3" aria-hidden="true">#</a> 裁判测试程序样例：</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;stdio.h&gt;

//求一个整数阿尔法乘积的函数 
long long alpha(long long n) ;

int main()
{
	long long n;
	
	scanf(&quot;%lld&quot;,&amp;n);	
	printf(&quot;%lld\\n&quot;,alpha(n));
	
	return 0 ;
}

/* 请在这里填写答案 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输入样例-3" tabindex="-1"><a class="header-anchor" href="#输入样例-3" aria-hidden="true">#</a> 输入样例：</h3><div class="language-in line-numbers-mode" data-ext="in"><pre class="language-in"><code>4018224312

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输出样例-3" tabindex="-1"><a class="header-anchor" href="#输出样例-3" aria-hidden="true">#</a> 输出样例：</h3><div class="language-out line-numbers-mode" data-ext="out"><pre class="language-out"><code>8

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="答案-3" tabindex="-1"><a class="header-anchor" href="#答案-3" aria-hidden="true">#</a> 答案：</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">long</span> <span class="token keyword">long</span> <span class="token function">alpha</span><span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">long</span> <span class="token keyword">long</span> temp <span class="token operator">=</span> n<span class="token punctuation">;</span>
  <span class="token keyword">long</span> <span class="token keyword">long</span> result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> n<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> temp <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">;</span> temp <span class="token operator">/=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>temp <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">*=</span> <span class="token punctuation">(</span>temp <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//printf(&quot;%d\\n&quot;,result);</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//printf(&quot;%d\\n&quot;,result);</span>
    <span class="token keyword">return</span> <span class="token function">alpha</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拆分字符串" tabindex="-1"><a class="header-anchor" href="#拆分字符串" aria-hidden="true">#</a> 拆分字符串</h2><p>任意给定一个字符串s（长度小于100），其中只包含大写字母“A—Z”和小写字母“a—z”。你的任务是把s中大写字母和小写字母分开，并分别存到指定的字符数组中。拆分后原字母顺序保持不变。本题要求用函数实现。</p><h3 id="函数接口定义-4" tabindex="-1"><a class="header-anchor" href="#函数接口定义-4" aria-hidden="true">#</a> 函数接口定义：</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>函数接口如下：
void split(const char *s, char *upper, char *lower) ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <code>s</code>、<code>upper</code> 和 <code>lower</code> 都是用户传入的参数。其中 s为待拆分字符串，upper为拆分后存大写字母的字符数组，lower为拆分后存小写字母的字符数组。函数返回值为空。</p><h3 id="裁判测试程序样例-4" tabindex="-1"><a class="header-anchor" href="#裁判测试程序样例-4" aria-hidden="true">#</a> 裁判测试程序样例：</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>函数被调用进行测试的例子如下：
#include&lt;stdio.h&gt;

void split(const char *s, char *upper, char *lower) ;

int main()
{
   	char	s[100] , upper[100] , lower[100] ; 
   	
   	scanf(&quot;%s&quot;,s);
	  split( s , upper , lower ) ;	
   	printf(&quot;%s\\n%s\\n&quot;, upper , lower) ;

    return 0;
}

/* 请在这里填写答案 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输入样例-4" tabindex="-1"><a class="header-anchor" href="#输入样例-4" aria-hidden="true">#</a> 输入样例：</h3><div class="language-in line-numbers-mode" data-ext="in"><pre class="language-in"><code>HwEorLLldO

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输出样例-4" tabindex="-1"><a class="header-anchor" href="#输出样例-4" aria-hidden="true">#</a> 输出样例：</h3><div class="language-out line-numbers-mode" data-ext="out"><pre class="language-out"><code>HELLO
world

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="答案-4" tabindex="-1"><a class="header-anchor" href="#答案-4" aria-hidden="true">#</a> 答案：</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">split</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>s<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>upper<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>lower<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    upper<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    lower<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span> <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      lower<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
      upper<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,74),c=[i];function p(l,o){return s(),a("div",null,c)}const u=n(t,[["render",p],["__file","2023-05-16-PTA.html.vue"]]);export{u as default};
