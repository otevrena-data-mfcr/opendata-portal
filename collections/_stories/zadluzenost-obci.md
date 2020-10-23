---
title: "Návod: Zadluženost obcí"
description: V tomto dokumentu se pokusíme prezentovat data z Monitoru státní pokladny, ve kterém nalezneme mimo jiné účetní data obcí, díky nimž můžeme získat jistý vhled do problematiky jejich zadluženosti.

type: jupyter

github: https://github.com/otevrena-data-mfcr/opendata-stories/tree/master/zadluzenost
---

V tomto dokumentu se pokusíme prezentovat data z Monitoru státní pokladny, ve kterém nalezneme mimo jiné účetní data obcí, díky nimž můžeme získat jistý vhled do problematiky jejich zadluženosti. Pro srovnání jsme využili ukazatel celkové zadluženosti v roce 2019, tedy podíl cizích zdrojů na celkových aktivech obce. Pro závěrečnou ilustraci částek pak položku rozvahy "dlouhodobé závazky".

Upozorňujeme, že se jedná pouze o ukázku práce s daty, nikoliv o komplexní analýzu a nelze tedy z tohoto dokumentu dělat závěry o zadluženosti obcí.


<div id="notebook">
  <div id="notebook-container">
    <div class="cell border-box-sizing text_cell rendered">
      <div class="prompt input_prompt">
      </div>
      <div class="inner_cell">
        <div class="text_cell_render border-box-sizing rendered_html">
          <h2 id="Úvod">Úvod<a class="anchor-link" href="#Úvod">¶</a></h2>
        </div>
      </div>
    </div>
    <div class="cell border-box-sizing text_cell rendered">
      <div class="prompt input_prompt">
      </div>
      <div class="inner_cell">
        <div class="text_cell_render border-box-sizing rendered_html">
          <p>V tomto dokumentu se pokusíme prezentovat data z Monitoru státní pokladny, ve kterém nalezneme mimo jiné účetní data obcí, díky nimž můžeme získat jistý vhled do problematiky jejich zadluženosti. Pro srovnání jsme využili ukazatel celkové zadluženosti v roce 2019, tedy podíl cizích zdrojů na celkových aktivech obce. Pro závěrečnou ilustraci částek pak položku rozvahy "dlouhodobé závazky".</p>

        </div>
      </div>
    </div>
    <div class="cell border-box-sizing text_cell rendered">
      <div class="prompt input_prompt">
      </div>
      <div class="inner_cell">
        <div class="text_cell_render border-box-sizing rendered_html">
          <p>V této ukázce jsme si práci trochu usnadnili a data zpracovali s využitím naší databáze, která data zpracovává do podoby tabulek automaticky. Na to, jak exporty ve formátu XML zpracovat ručně, se podíváme v jiném článku.</p>

        </div>
      </div>
    </div>
    <div class="cell border-box-sizing code_cell rendered">
      <div class="input">
        <div class="prompt input_prompt">In&nbsp;[1]:</div>
        <div class="inner_cell">
          <div class="input_area">
            <div class=" highlight hl-ipython3">
              <pre><span></span><span class="kn">import</span> <span class="nn">pandas</span> <span class="k">as</span> <span class="nn">pd</span>
<span class="n">data_ratios</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">read_json</span><span class="p">(</span><span class="s2">"https://opendata.mfcr.cz/api/stories/zadluzenost_pomer"</span><span class="p">)</span>
<span class="n">data_hist</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">read_json</span><span class="p">(</span><span class="s2">"https://opendata.mfcr.cz/api/stories/zadluzenost_histogram"</span><span class="p">)</span>
</pre>
            </div>

          </div>
        </div>
      </div>

    </div>
    <div class="cell border-box-sizing text_cell rendered">
      <div class="prompt input_prompt">
      </div>
      <div class="inner_cell">
        <div class="text_cell_render border-box-sizing rendered_html">
          <h2 id="Nejzadluženější-obce">Nejzadluženější obce<a class="anchor-link" href="#Nejzadluženější-obce">¶</a></h2>
        </div>
      </div>
    </div>
    <div class="cell border-box-sizing text_cell rendered">
      <div class="prompt input_prompt">
      </div>
      <div class="inner_cell">
        <div class="text_cell_render border-box-sizing rendered_html">
          <p>Dle vybrané metriky jsou nejvíce zadlužené obce tyto:</p>

        </div>
      </div>
    </div>
    <div class="cell border-box-sizing code_cell rendered">
      <div class="input">
        <div class="prompt input_prompt">In&nbsp;[2]:</div>
        <div class="inner_cell">
          <div class="input_area">
            <div class=" highlight hl-ipython3">
              <pre><span></span><span class="n">view</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">(</span><span class="n">data_ratios</span><span class="p">)</span><span class="o">.</span><span class="n">sort_values</span><span class="p">(</span><span class="n">by</span><span class="o">=</span><span class="s1">'ratio'</span><span class="p">,</span> <span class="n">ascending</span><span class="o">=</span><span class="kc">False</span><span class="p">)</span><span class="o">.</span><span class="n">rename</span><span class="p">({</span><span class="s2">"ucjed_nazev"</span><span class="p">:</span><span class="s2">"Obec"</span><span class="p">},</span><span class="n">axis</span><span class="o">=</span><span class="mi">1</span><span class="p">)</span>
<span class="n">pomer_format</span> <span class="o">=</span> <span class="n">view</span><span class="p">[</span><span class="s1">'ratio'</span><span class="p">]</span><span class="o">.</span><span class="n">apply</span><span class="p">(</span><span class="k">lambda</span> <span class="n">x</span><span class="p">:</span> <span class="s1">'</span><span class="si">{0:.1f}</span><span class="s1">'</span><span class="o">.</span><span class="n">format</span><span class="p">(</span><span class="n">x</span><span class="o">*</span><span class="mi">100</span><span class="p">)</span><span class="o">+</span><span class="s2">"%"</span><span class="p">)</span>
<span class="n">view</span><span class="p">[</span><span class="s2">"Míra celkové zadluženosti"</span><span class="p">]</span> <span class="o">=</span> <span class="n">pomer_format</span>
<span class="n">view</span><span class="o">.</span><span class="n">drop</span><span class="p">(</span><span class="s2">"ratio"</span><span class="p">,</span><span class="n">axis</span><span class="o">=</span><span class="mi">1</span><span class="p">)</span><span class="o">.</span><span class="n">head</span><span class="p">(</span><span class="mi">10</span><span class="p">)</span>
</pre>
            </div>

          </div>
        </div>
      </div>

      <div class="output_wrapper">
        <div class="output">


          <div class="output_area">

            <div class="prompt output_prompt">Out[2]:</div>



            <div class="output_html rendered_html output_subarea output_execute_result">
              <div>
                <style scoped="">
                  .dataframe tbody tr th:only-of-type {
                    vertical-align: middle;
                  }

                  .dataframe tbody tr th {
                    vertical-align: top;
                  }

                  .dataframe thead th {
                    text-align: right;
                  }
                </style>
                <table border="1" class="dataframe">
                  <thead>
                    <tr style="text-align: right;">
                      <th></th>
                      <th>Obec</th>
                      <th>Míra celkové zadluženosti</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>3090</th>
                      <td>Obec Turovice</td>
                      <td>808.9%</td>
                    </tr>
                    <tr>
                      <th>5888</th>
                      <td>Obec Prameny</td>
                      <td>431.0%</td>
                    </tr>
                    <tr>
                      <th>3721</th>
                      <td>Obec Olešnice</td>
                      <td>79.8%</td>
                    </tr>
                    <tr>
                      <th>3578</th>
                      <td>Obec Koruna</td>
                      <td>73.0%</td>
                    </tr>
                    <tr>
                      <th>3657</th>
                      <td>Obec Čestice</td>
                      <td>71.2%</td>
                    </tr>
                    <tr>
                      <th>625</th>
                      <td>Obec Strýčice</td>
                      <td>71.0%</td>
                    </tr>
                    <tr>
                      <th>79</th>
                      <td>Obec Podsedice</td>
                      <td>68.4%</td>
                    </tr>
                    <tr>
                      <th>763</th>
                      <td>Městys Panenský Týnec</td>
                      <td>58.4%</td>
                    </tr>
                    <tr>
                      <th>2446</th>
                      <td>Obec Doubek</td>
                      <td>56.4%</td>
                    </tr>
                    <tr>
                      <th>4847</th>
                      <td>Obec Naloučany</td>
                      <td>55.2%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
    <div class="cell border-box-sizing text_cell rendered">
      <div class="prompt input_prompt">
      </div>
      <div class="inner_cell">
        <div class="text_cell_render border-box-sizing rendered_html">
          <h3 id="Rozdělení-obcí-dle-zadlužení:">Rozdělení obcí dle zadlužení:<a class="anchor-link" href="#Rozdělení-obcí-dle-zadlužení:">¶</a></h3>
        </div>
      </div>
    </div>
    <div class="cell border-box-sizing text_cell rendered">
      <div class="prompt input_prompt">
      </div>
      <div class="inner_cell">
        <div class="text_cell_render border-box-sizing rendered_html">
          <p>Mimo obce nejzadluženější se podíváme ještě na to, jak si vedou obce celkově. Následující histogram ukazuje, v jakých řádech se pohybují dlouhodobé závazky obcí. Pro každý řád ukazuje výše sloupce počet obcí, které do takové kategorie spadají. Jak vidíme, značné množství obcí nalezneme již v první skupině, tedy v oblasti nulového dlouhodobého zadlužení.</p>

        </div>
      </div>
    </div>
    <div class="cell border-box-sizing code_cell rendered">
      <div class="input">
        <div class="prompt input_prompt">In&nbsp;[3]:</div>
        <div class="inner_cell">
          <div class="input_area">
            <div class=" highlight hl-ipython3">
              <pre><span></span><span class="k">def</span> <span class="nf">format_sup</span><span class="p">(</span><span class="n">x</span><span class="p">):</span>
  <span class="n">how</span> <span class="o">=</span> <span class="nb">str</span><span class="o">.</span><span class="n">maketrans</span><span class="p">(</span><span class="s2">"0123456789"</span><span class="p">,</span> <span class="s2">"⁰¹²³⁴⁵⁶⁷⁸⁹"</span><span class="p">)</span>
  <span class="k">if</span><span class="p">(</span><span class="n">x</span><span class="o">==</span><span class="mi">0</span><span class="p">):</span>
      <span class="k">return</span> <span class="mi">1</span>
  <span class="k">else</span><span class="p">:</span>
      <span class="k">return</span> <span class="s2">"10"</span><span class="o">+</span><span class="nb">str</span><span class="p">(</span><span class="n">x</span><span class="p">)</span><span class="o">.</span><span class="n">translate</span><span class="p">(</span><span class="n">how</span><span class="p">)</span>

<span class="n">labels</span> <span class="o">=</span> <span class="nb">list</span><span class="p">(</span><span class="n">data_hist</span><span class="p">[</span><span class="s2">"bucket"</span><span class="p">]</span><span class="o">.</span><span class="n">apply</span><span class="p">(</span><span class="n">format_sup</span><span class="p">))</span>
<span class="n">values</span> <span class="o">=</span> <span class="nb">list</span><span class="p">(</span><span class="n">data_hist</span><span class="p">[</span><span class="s2">"count"</span><span class="p">])</span>
</pre>
            </div>

          </div>
        </div>
      </div>

    </div>
    <div class="cell border-box-sizing code_cell rendered">
      <div class="input">
        <div class="prompt input_prompt">In&nbsp;[4]:</div>
        <div class="inner_cell">
          <div class="input_area">
            <div class=" highlight hl-ipython3">
              <pre><span></span><span class="kn">from</span> <span class="nn">iplotter</span> <span class="kn">import</span> <span class="n">ChartJSPlotter</span>
<span class="n">plotter</span> <span class="o">=</span> <span class="n">ChartJSPlotter</span><span class="p">()</span>
<span class="n">chart</span> <span class="o">=</span> <span class="p">{</span><span class="s2">"labels"</span><span class="p">:</span> <span class="n">labels</span><span class="p">,</span><span class="s2">"datasets"</span><span class="p">:</span> <span class="p">[{</span><span class="s2">"label"</span><span class="p">:</span><span class="s2">"Počet obcí"</span><span class="p">,</span><span class="s2">"data"</span><span class="p">:</span> <span class="n">values</span><span class="p">,</span> <span class="s2">"backgroundColor"</span><span class="p">:</span><span class="s2">"#0099ff"</span><span class="p">}]}</span>      
<span class="n">plotter</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">chart</span><span class="p">,</span><span class="n">chart_type</span><span class="o">=</span><span class="s2">"bar"</span><span class="p">,</span><span class="n">options</span><span class="o">=</span><span class="kc">None</span><span class="p">)</span>
</pre>
            </div>

          </div>
        </div>
      </div>

      <div class="output_wrapper">
        <div class="output">


          <div class="output_area">

            <div class="prompt"></div>


            <div class="output_subarea output_stream output_stderr output_text">
              <pre>C:\Users\tomvi\Anaconda3\lib\site-packages\IPython\core\display.py:694: UserWarning: Consider using IPython.display.IFrame instead
warnings.warn("Consider using IPython.display.IFrame instead")
</pre>
            </div>
          </div>

          <div class="output_area">

            <div class="prompt output_prompt">Out[4]:</div>



            <div class="output_html rendered_html output_subarea output_execute_result">
              <iframe srcdoc="
      <!-- Load Charts.js -->
     <script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.bundle.min.js'></script>
  
      <canvas id='chart'></canvas>
      <script>
          var ctx = document.getElementById('chart').getContext('2d');
          ctx.canvas.width  = 800 - (.1 * 800);
          ctx.canvas.height = 420 - (.15 * 420);
          var myNewChart = new Chart(ctx,{ type: 'bar', data: {
  'labels': [
      1,
      '10\u00b9',
      '10\u00b2',
      '10\u00b3',
      '10\u2074',
      '10\u2075',
      '10\u2076',
      '10\u2077',
      '10\u2078',
      '10\u2079',
      '10\u00b9\u2070'
  ],
  'datasets': [
      {
          'label': 'Po\u010det obc\u00ed',
          'data': [
              2433,
              2,
              1,
              4,
              124,
              320,
              754,
              1637,
              893,
              79,
              5
          ],
          'backgroundColor': '#0099ff'
      }
  ]
}, options: null });
      </script>
  " src="" width="800" height="420" frameborder="0" sandbox="allow-scripts"></iframe>
            </div>

          </div>

        </div>
      </div>

    </div>
    <div class="cell border-box-sizing code_cell rendered">
      <div class="input">
        <div class="prompt input_prompt">In&nbsp;[&nbsp;]:</div>
        <div class="inner_cell">
          <div class="input_area">
            <div class=" highlight hl-ipython3">
              <pre><span></span> 
</pre>
            </div>

          </div>
        </div>
      </div>

    </div>



  </div>
</div>