/*
 * Copyright 2023 quafadas
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package viz.vega.plots

import viz.vega.Framework
import viz.vega.Framework.*
import viz.PlatformGetSpec

enum SpecUrl(url: String, f: Framework) extends PlatformGetSpec(url, f):
  // Vega
  case BarChart extends SpecUrl("https://vega.github.io/vega/examples/bar-chart.vg.json", Vega)
  case StackedBarChart extends SpecUrl("https://vega.github.io/vega/examples/stacked-bar-chart.vg.json", Vega)
  case GroupedBarChart extends SpecUrl("https://vega.github.io/vega/examples/grouped-bar-chart.vg.json", Vega)
  case NestedBarChart extends SpecUrl("https://vega.github.io/vega/examples/nested-bar-chart.vg.json", Vega)
  case PopulationPyramid extends SpecUrl("https://vega.github.io/vega/examples/population-pyramid.vg.json", Vega)
  case LineChart extends SpecUrl("https://vega.github.io/vega/examples/line-chart.vg.json", Vega)
  case AreaChart extends SpecUrl("https://vega.github.io/vega/examples/area-chart.vg.json", Vega)
  case StackedAreaChart extends SpecUrl("https://vega.github.io/vega/examples/stacked-area-chart.vg.json", Vega)
  case HorizonGraph extends SpecUrl("https://vega.github.io/vega/examples/horizon-graph.vg.json", Vega)
  case JobVoyager extends SpecUrl("https://vega.github.io/vega/examples/job-voyager.vg.json", Vega)
  case PieChart extends SpecUrl("https://vega.github.io/vega/examples/pie-chart.vg.json", Vega)
  case DonutChart extends SpecUrl("https://vega.github.io/vega/examples/donut-chart.vg.json", Vega)
  case RadialPlot extends SpecUrl("https://vega.github.io/vega/examples/radial-plot.vg.json", Vega)
  case RadarChart extends SpecUrl("https://vega.github.io/vega/examples/radar-chart.vg.json", Vega)
  case ScatterPlot extends SpecUrl("https://vega.github.io/vega/examples/scatter-plot.vg.json", Vega)
  case ScatterPlotNullValues
      extends SpecUrl("https://vega.github.io/vega/examples/scatter-plot-null-values.vg.json", Vega)
  case ConnectedScatterPlot extends SpecUrl("https://vega.github.io/vega/examples/connected-scatter-plot.vg.json", Vega)
  case ErrorBars extends SpecUrl("https://vega.github.io/vega/examples/error-bars.vg.json", Vega)
  case BarleyTrellisPlot extends SpecUrl("https://vega.github.io/vega/examples/barley-trellis-plot.vg.json", Vega)
  case Regression extends SpecUrl("https://vega.github.io/vega/examples/regression.vg.json", Vega)
  case LoessRegression extends SpecUrl("https://vega.github.io/vega/examples/loess-regression.vg.json", Vega)
  case LabeledScatterPlot extends SpecUrl("https://vega.github.io/vega/examples/labeled-scatter-plot.vg.json", Vega)
  case TopKPlot extends SpecUrl("https://vega.github.io/vega/examples/top-k-plot.vg.json", Vega)
  case TopKPlotWithOthers extends SpecUrl("https://vega.github.io/vega/examples/top-k-plot-with-others.vg.json", Vega)
  case Histogram extends SpecUrl("https://vega.github.io/vega/examples/histogram.vg.json", Vega)
  case HistogramNullValues extends SpecUrl("https://vega.github.io/vega/examples/histogram-null-values.vg.json", Vega)
  case DotPlot extends SpecUrl("https://vega.github.io/vega/examples/dot-plot.vg.json", Vega)
  case ProbabilityDensity extends SpecUrl("https://vega.github.io/vega/examples/probability-density.vg.json", Vega)
  case BoxPlot extends SpecUrl("https://vega.github.io/vega/examples/box-plot.vg.json", Vega)
  case ViolinPlot extends SpecUrl("https://vega.github.io/vega/examples/violin-plot.vg.json", Vega)
  case BinnedScatterPlot extends SpecUrl("https://vega.github.io/vega/examples/binned-scatter-plot.vg.json", Vega)
  case ContourPlot extends SpecUrl("https://vega.github.io/vega/examples/contour-plot.vg.json", Vega)
  case WheatPlot extends SpecUrl("https://vega.github.io/vega/examples/wheat-plot.vg.json", Vega)
  case QuantileQuantilePlot extends SpecUrl("https://vega.github.io/vega/examples/quantile-quantile-plot.vg.json", Vega)
  case QuantileDotPlot extends SpecUrl("https://vega.github.io/vega/examples/quantile-dot-plot.vg.json", Vega)
  case HypotheticalOutcomePlots
      extends SpecUrl("https://vega.github.io/vega/examples/hypothetical-outcome-plots.vg.json", Vega)
  case TimeUnits extends SpecUrl("https://vega.github.io/vega/examples/time-units.vg.json", Vega)
  case CountyUnemployment extends SpecUrl("https://vega.github.io/vega/examples/county-unemployment.vg.json", Vega)
  case DorlingCartogram extends SpecUrl("https://vega.github.io/vega/examples/dorling-cartogram.vg.json", Vega)
  case WorldMap extends SpecUrl("https://vega.github.io/vega/examples/world-map.vg.json", Vega)
  case Earthquakes extends SpecUrl("https://vega.github.io/vega/examples/earthquakes.vg.json", Vega)
  case Projections extends SpecUrl("https://vega.github.io/vega/examples/projections.vg.json", Vega)
  case ZoomableWorldMap extends SpecUrl("https://vega.github.io/vega/examples/zoomable-world-map.vg.json", Vega)
  case DistortionComparison extends SpecUrl("https://vega.github.io/vega/examples/distortion-comparison.vg.json", Vega)
  case VolcanoContours extends SpecUrl("https://vega.github.io/vega/examples/volcano-contours.vg.json", Vega)
  case WindVectors extends SpecUrl("https://vega.github.io/vega/examples/wind-vectors.vg.json", Vega)
  case AnnualPrecipitation extends SpecUrl("https://vega.github.io/vega/examples/annual-precipitation.vg.json", Vega)
  case TreeLayout extends SpecUrl("https://vega.github.io/vega/examples/tree-layout.vg.json", Vega)
  case RadialTreeLayout extends SpecUrl("https://vega.github.io/vega/examples/radial-tree-layout.vg.json", Vega)
  case Treemap extends SpecUrl("https://vega.github.io/vega/examples/treemap.vg.json", Vega)
  case CirclePacking extends SpecUrl("https://vega.github.io/vega/examples/circle-packing.vg.json", Vega)
  case Sunburst extends SpecUrl("https://vega.github.io/vega/examples/sunburst.vg.json", Vega)
  case EdgeBundling extends SpecUrl("https://vega.github.io/vega/examples/edge-bundling.vg.json", Vega)
  case ForceDirectedLayout extends SpecUrl("https://vega.github.io/vega/examples/force-directed-layout.vg.json", Vega)
  case ReorderableMatrix extends SpecUrl("https://vega.github.io/vega/examples/reorderable-matrix.vg.json", Vega)
  case ArcDiagram extends SpecUrl("https://vega.github.io/vega/examples/arc-diagram.vg.json", Vega)
  case AirportConnections extends SpecUrl("https://vega.github.io/vega/examples/airport-connections.vg.json", Vega)
  case Heatmap extends SpecUrl("https://vega.github.io/vega/examples/heatmap.vg.json", Vega)
  case DensityHeatmaps extends SpecUrl("https://vega.github.io/vega/examples/density-heatmaps.vg.json", Vega)
  case ParallelCoordinates extends SpecUrl("https://vega.github.io/vega/examples/parallel-coordinates.vg.json", Vega)
  case WordCloud extends SpecUrl("https://vega.github.io/vega/examples/word-cloud.vg.json", Vega)
  case BeeswarmPlot extends SpecUrl("https://vega.github.io/vega/examples/beeswarm-plot.vg.json", Vega)
  case CalendarView extends SpecUrl("https://vega.github.io/vega/examples/calendar-view.vg.json", Vega)
  case BudgetForecasts extends SpecUrl("https://vega.github.io/vega/examples/budget-forecasts.vg.json", Vega)
  case WheatAndWages extends SpecUrl("https://vega.github.io/vega/examples/wheat-and-wages.vg.json", Vega)
  case FalkenseePopulation extends SpecUrl("https://vega.github.io/vega/examples/falkensee-population.vg.json", Vega)
  case AnnualTemperature extends SpecUrl("https://vega.github.io/vega/examples/annual-temperature.vg.json", Vega)
  case WeeklyTemperature extends SpecUrl("https://vega.github.io/vega/examples/weekly-temperature.vg.json", Vega)
  case FlightPassengers extends SpecUrl("https://vega.github.io/vega/examples/flight-passengers.vg.json", Vega)
  case Timelines extends SpecUrl("https://vega.github.io/vega/examples/timelines.vg.json", Vega)
  case UDistrictCuisine extends SpecUrl("https://vega.github.io/vega/examples/u-district-cuisine.vg.json", Vega)
  case Clock extends SpecUrl("https://vega.github.io/vega/examples/clock.vg.json", Vega)
  case Watch extends SpecUrl("https://vega.github.io/vega/examples/watch.vg.json", Vega)
  case CrossfilterFlights extends SpecUrl("https://vega.github.io/vega/examples/crossfilter-flights.vg.json", Vega)
  case OverviewPlusDetail extends SpecUrl("https://vega.github.io/vega/examples/overview-plus-detail.vg.json", Vega)
  case BrushingScatterPlots extends SpecUrl("https://vega.github.io/vega/examples/brushing-scatter-plots.vg.json", Vega)
  case ZoomableScatterPlot extends SpecUrl("https://vega.github.io/vega/examples/zoomable-scatter-plot.vg.json", Vega)
  case ZoomableBinnedPlot extends SpecUrl("https://vega.github.io/vega/examples/zoomable-binned-plot.vg.json", Vega)
  case GlobalDevelopment extends SpecUrl("https://vega.github.io/vega/examples/global-development.vg.json", Vega)
  case InteractiveLegend extends SpecUrl("https://vega.github.io/vega/examples/interactive-legend.vg.json", Vega)
  case StockIndexChart extends SpecUrl("https://vega.github.io/vega/examples/stock-index-chart.vg.json", Vega)
  case PiMonteCarlo extends SpecUrl("https://vega.github.io/vega/examples/pi-monte-carlo.vg.json", Vega)
  case Pacman extends SpecUrl("https://vega.github.io/vega/examples/pacman.vg.json", Vega)
  case Platformer extends SpecUrl("https://vega.github.io/vega/examples/platformer.vg.json", Vega)

  // Vega lite
  case SimpleBarChartLite extends SpecUrl("https://vega.github.io/vega-lite/examples/bar.html", VegaLite)
  case ResponsiveBarChartLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/bar_size_responsive.html", VegaLite)
  case AggregateBarChartLite extends SpecUrl("https://vega.github.io/vega-lite/examples/bar_aggregate.html", VegaLite)
  case AggregateBarChart_SortedLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/bar_aggregate_sort_by_encoding.html", VegaLite)
  case GroupedBarChartLite extends SpecUrl("https://vega.github.io/vega-lite/examples/bar_grouped.html", VegaLite)
  case GroupedBarChart_MultipleMeasurewithRepeatLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/bar_grouped_repeated.html", VegaLite)
  case StackedBarChartLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/stacked_bar_weather.html", VegaLite)
  case StackedBarChartwithRoundedCornersLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/stacked_bar_count_corner_radius_mark.html", VegaLite)
  case HorizontalStackedBarChartLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/stacked_bar_h.html", VegaLite)
  case Normalized_PercentageStackedBarChartLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/stacked_bar_normalize.html", VegaLite)
  case Normalized_PercentageStackedBarChartWithLabelsLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/stacked_bar_h_normalized_labeled.html", VegaLite)
  case GanttChart_RangedBarMarksLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/bar_gantt.html", VegaLite)
  case ABarChartEncodingColorNamesintheDataLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/bar_color_disabled_scale.html", VegaLite)
  case LayeredBarChartLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/bar_layered_transparent.html", VegaLite)
  case DivergingStackedBarChart_PopulationPyramidLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/bar_diverging_stack_population_pyramid.html", VegaLite)
  case DivergingStackedBarChart_withNeutralPartsLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/bar_diverging_stack_transform.html", VegaLite)
  case BarChartwithLabelsLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_bar_labels.html", VegaLite)
  case BarChartwithLabelOverlaysLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_bar_labels_grey.html", VegaLite)
  case BarChartshowingInitialsofMonthNamesLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/bar_month_temporal_initial.html", VegaLite)
  case BarChartwithNegativeValuesandaZero_BaselineLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/bar_negative.html", VegaLite)
  case HorizontalBarChartwithNegativeValuesandLabelsLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/bar_negative_horizontal_label.html", VegaLite)
  case BarChartwithaSpacing_SavingY_AxisLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/bar_axis_space_saving.html", VegaLite)
  case HistogramLite extends SpecUrl("https://vega.github.io/vega-lite/examples/histogram.html", VegaLite)
  case Histogram_fromBinnedDataLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/bar_binned_data.html", VegaLite)
  case Log_scaledHistogramLite extends SpecUrl("https://vega.github.io/vega-lite/examples/histogram_log.html", VegaLite)
  case Non_linearHistogramLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/histogram_nonlinear.html", VegaLite)
  case RelativeFrequencyHistogramLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/histogram_rel_freq.html", VegaLite)
  case DensityPlotLite extends SpecUrl("https://vega.github.io/vega-lite/examples/area_density.html", VegaLite)
  case StackedDensityEstimatesLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/area_density_stacked.html", VegaLite)
  case TwoDHistogramScatterplotLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/circle_binned.html", VegaLite)
  case TwoDHistogramHeatmapLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/rect_binned_heatmap.html", VegaLite)
  case CumulativeFrequencyDistributionLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/area_cumulative_freq.html", VegaLite)
  case LayeredHistogramandCumulativeHistogramLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_cumulative_histogram.html", VegaLite)
  case WilkinsonDotPlotLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/circle_wilkinson_dotplot.html", VegaLite)
  case IsotypeDotPlotLite extends SpecUrl("https://vega.github.io/vega-lite/examples/isotype_bar_chart.html", VegaLite)
  case IsotypeDotPlotwithEmojiLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/isotype_bar_chart_emoji.html", VegaLite)
  case ScatterplotLite extends SpecUrl("https://vega.github.io/vega-lite/examples/point_2d.html", VegaLite)
  case OneDStripPlotLite extends SpecUrl("https://vega.github.io/vega-lite/examples/tick_dot.html", VegaLite)
  case StripPlotLite extends SpecUrl("https://vega.github.io/vega-lite/examples/tick_strip.html", VegaLite)
  case ColoredScatterplotLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/point_color_with_shape.html", VegaLite)
  case TwoDHistogramScatterplot0Lite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/circle_binned.html", VegaLite)
  case BubblePlotLite extends SpecUrl("https://vega.github.io/vega-lite/examples/point_bubble.html", VegaLite)
  case ScatterplotwithNullValuesinGreyLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/point_invalid_color.html", VegaLite)
  case ScatterplotwithFilledCirclesLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/circle.html", VegaLite)
  case BubblePlot_GapminderLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/circle_bubble_health_income.html", VegaLite)
  case BubblePlot_NaturalDisastersLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/circle_natural_disasters.html", VegaLite)
  case ScatterPlotwithTextMarksLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/text_scatterplot_colored.html", VegaLite)
  case Image_basedScatterPlotLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/scatter_image.html", VegaLite)
  case StripplotwithcustomaxisticklabelsLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/circle_custom_tick_labels.html", VegaLite)
  case DotPlotwithJitteringLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/point_offset_random.html", VegaLite)
  case LineChartLite extends SpecUrl("https://vega.github.io/vega-lite/examples/line.html", VegaLite)
  case LineChartwithPointMarkersLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/line_overlay.html", VegaLite)
  case LineChartwithStrokedPointMarkersLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/line_overlay_stroked.html", VegaLite)
  case MultiSeriesLineChartLite extends SpecUrl("https://vega.github.io/vega-lite/examples/line_color.html", VegaLite)
  case MultiSeriesLineChartwithRepeatOperatorLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/repeat_layer.html", VegaLite)
  case MultiSeriesLineChartwithHaloStrokeLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/line_color_halo.html", VegaLite)
  case SlopeGraphLite extends SpecUrl("https://vega.github.io/vega-lite/examples/line_slope.html", VegaLite)
  case StepChartLite extends SpecUrl("https://vega.github.io/vega-lite/examples/line_step.html", VegaLite)
  case LineChartwithMonotoneInterpolationLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/line_monotone.html", VegaLite)
  case LineChartwithConditionalAxisPropertiesLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/line_conditional_axis.html", VegaLite)
  case ConnectedScatterplot_LineswithCustomPathsLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/connected_scatterplot.html", VegaLite)
  case BumpChartLite extends SpecUrl("https://vega.github.io/vega-lite/examples/line_bump.html", VegaLite)
  case LineChartwithVaryingSize_usingthetrailmarkLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/trail_color.html", VegaLite)
  case AcometchartshowingchangesbetweenbetweentwostatesLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/trail_comet.html", VegaLite)
  case LineChartwithMarkersandInvalidValuesLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/line_skip_invalid_mid_overlay.html", VegaLite)
  case CarbonDioxideintheAtmosphereLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_line_co2_concentration.html", VegaLite)
  case LineChartsShowingRanksOverTimeLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/window_rank.html", VegaLite)
  case DrawingSineandCosineCurveswiththeSequenceGeneratorLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/sequence_line_fold.html", VegaLite)
  case LinechartwithvaryingstrokedashLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/line_strokedash.html", VegaLite)
  case LinechartwithadashedpartLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/line_dashed_part.html", VegaLite)
  case AreaChartLite extends SpecUrl("https://vega.github.io/vega-lite/examples/area.html", VegaLite)
  case AreaChartwithGradientLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/area_gradient.html", VegaLite)
  case AreaChartwithOverlayingLinesandPointMarkersLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/area_overlay.html", VegaLite)
  case StackedAreaChartLite extends SpecUrl("https://vega.github.io/vega-lite/examples/stacked_area.html", VegaLite)
  case NormalizedStackedAreaChartLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/stacked_area_normalize.html", VegaLite)
  case StreamgraphLite extends SpecUrl("https://vega.github.io/vega-lite/examples/stacked_area_stream.html", VegaLite)
  case HorizonGraphLite extends SpecUrl("https://vega.github.io/vega-lite/examples/area_horizon.html", VegaLite)
  case TableHeatmapLite extends SpecUrl("https://vega.github.io/vega-lite/examples/rect_heatmap.html", VegaLite)
  case AnnualWeatherHeatmapLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/rect_heatmap_weather.html", VegaLite)
  case TwoDHistogramHeatmap0Lite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/rect_binned_heatmap.html", VegaLite)
  case TableBubblePlot_GithubPunchCardLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/circle_github_punchcard.html", VegaLite)
  case HeatmapwithLabelsLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_text_heatmap.html", VegaLite)
  case LasagnaPlot_DenseTime_SeriesHeatmapLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/rect_lasagna.html", VegaLite)
  case MosaicChartwithLabelsLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/rect_mosaic_labelled_with_offset.html", VegaLite)
  case WindVectorMapLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/point_angle_windvector.html", VegaLite)
  case PieChartLite extends SpecUrl("https://vega.github.io/vega-lite/examples/arc_pie.html", VegaLite)
  case DonutChartLite extends SpecUrl("https://vega.github.io/vega-lite/examples/arc_donut.html", VegaLite)
  case PieChartwithLabelsLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_arc_label.html", VegaLite)
  case RadialPlotLite extends SpecUrl("https://vega.github.io/vega-lite/examples/arc_radial.html", VegaLite)
  case PyramidPieChartLite extends SpecUrl("https://vega.github.io/vega-lite/examples/arc_pie_pyramid.html", VegaLite)
  case CalculatePercentageofTotalLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/window_percent_of_total.html", VegaLite)
  case CalculateDifferencefromAverageLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/joinaggregate_mean_difference.html", VegaLite)
  case CalculateDifferencefromAnnualAverageLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/joinaggregate_mean_difference_by_year.html", VegaLite)
  case CalculateResidualsLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/joinaggregate_residual_graph.html", VegaLite)
  case LineChartsShowingRanksOverTime0Lite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/window_rank.html", VegaLite)
  case WaterfallChartofMonthlyProfitandLossLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/waterfall_chart.html", VegaLite)
  case FilteringTop_KItemsLite extends SpecUrl("https://vega.github.io/vega-lite/examples/window_top_k.html", VegaLite)
  case Top_KPlotwithOthersLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/window_top_k_others.html", VegaLite)
  case UsingthelookuptransformtocombinedataLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/lookup.html", VegaLite)
  case CumulativeFrequencyDistribution0Lite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/area_cumulative_freq.html", VegaLite)
  case LayeredHistogramandCumulativeHistogram0Lite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_cumulative_histogram.html", VegaLite)
  case ParallelCoordinatePlotLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/parallel_coordinate.html", VegaLite)
  case BarChartShowingArgmaxValueLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/bar_argmax.html", VegaLite)
  case LayeringAveragesoverRawValuesLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_line_mean_point_raw.html", VegaLite)
  case LayeringRollingAveragesoverRawValuesLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_line_rolling_mean_point_raw.html", VegaLite)
  case LineCharttoShowBenchmarkingResultsLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_line_window.html", VegaLite)
  case Quantile_QuantilePlot_QQPlotLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/point_quantile_quantile.html", VegaLite)
  case LinearRegressionLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_point_line_regression.html", VegaLite)
  case LoessRegressionLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_point_line_loess.html", VegaLite)
  case ErrorBarsShowingConfidenceIntervalLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_point_errorbar_ci.html", VegaLite)
  case ErrorBarsShowingStandardDeviationLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_point_errorbar_stdev.html", VegaLite)
  case LineChartwithConfidenceIntervalBandLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_line_errorband_ci.html", VegaLite)
  case ScatterplotwithMeanandStandardDeviationOverlayLite
      extends SpecUrl(
        "https://vega.github.io/vega-lite/examples/layer_scatter_errorband_1D_stdev_global_mean.html",
        VegaLite
      )
  case BoxPlotwithMin_MaxWhiskersLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/boxplot_minmax_2D_vertical.html", VegaLite)
  case TukeyBoxPlot_One_5IQRLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/boxplot_2D_vertical.html", VegaLite)
  case BoxPlotwithPre_CalculatedSummariesLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/boxplot_preaggregated.html", VegaLite)
  case SimpleBarChartwithLabelsLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_bar_labels.html", VegaLite)
  case SimpleBarChartwithLabelsandEmojisLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_bar_fruit.html", VegaLite)
  case LayeringtextoverheatmapLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_text_heatmap.html", VegaLite)
  case CarbonDioxideintheAtmosphere0Lite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_line_co2_concentration.html", VegaLite)
  case BarChartHighlightingValuesbeyondaThresholdLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_bar_annotations.html", VegaLite)
  case MeanoverlayoverprecipitationchartLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_precipitation_mean.html", VegaLite)
  case HistogramwithaGlobalMeanOverlayLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_histogram_global_mean.html", VegaLite)
  case LineChartwithHighlightedRectanglesLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_falkensee.html", VegaLite)
  case LayeringAveragesoverRawValues0Lite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_line_mean_point_raw.html", VegaLite)
  case LayeringRollingAveragesoverRawValues0Lite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_line_rolling_mean_point_raw.html", VegaLite)
  case DistributionsandMediansofLikertScaleRatingsLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_likert.html", VegaLite)
  case ComparativeLikertScaleRatingsLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/concat_layer_voyager_result.html", VegaLite)
  case CandlestickChartLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_candlestick.html", VegaLite)
  case RangedDotPlotLite extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_ranged_dot.html", VegaLite)
  case BulletChartLite extends SpecUrl("https://vega.github.io/vega-lite/examples/facet_bullet.html", VegaLite)
  case LayeredPlotwithDual_AxisLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/layer_dual_axis.html", VegaLite)
  case HorizonGraph0Lite extends SpecUrl("https://vega.github.io/vega-lite/examples/area_horizon.html", VegaLite)
  case WeeklyWeatherPlotLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/bar_layered_weather.html", VegaLite)
  case WheatandWagesExampleLite extends SpecUrl("https://vega.github.io/vega-lite/examples/wheat_wages.html", VegaLite)
  case TrellisBarChartLite extends SpecUrl("https://vega.github.io/vega-lite/examples/trellis_bar.html", VegaLite)
  case TrellisStackedBarChartLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/trellis_stacked_bar.html", VegaLite)
  case TrellisScatterPlot_wrappedLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/trellis_scatter.html", VegaLite)
  case TrellisHistogramsLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/trellis_bar_histogram.html", VegaLite)
  case TrellisScatterPlotShowingAnscombesQuartetLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/trellis_anscombe.html", VegaLite)
  case BeckersBarleyTrellisPlotLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/trellis_barley.html", VegaLite)
  case TrellisAreaLite extends SpecUrl("https://vega.github.io/vega-lite/examples/trellis_area.html", VegaLite)
  case TrellisAreaPlotShowingAnnualTemperaturesinSeattleLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/trellis_area_seattle.html", VegaLite)
  case FacetedDensityPlotLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/area_density_facet.html", VegaLite)
  case CompactTrellisGridofBarChartsLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/facet_grid_bar.html", VegaLite)
  case RepeatandLayertoShowDifferentMovieMeasuresLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/repeat_layer.html", VegaLite)
  case VerticalConcatenationLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/vconcat_weather.html", VegaLite)
  case HorizontallyRepeatedChartsLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/repeat_histogram.html", VegaLite)
  case InteractiveScatterplotMatrixLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/interactive_splom.html", VegaLite)
  case MarginalHistogramsLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/concat_marginal_histograms.html", VegaLite)
  case DiscretizingscalesLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/concat_bar_scales_discretize.html", VegaLite)
  case NestedViewConcatenationAlignedwithAxisminExtentLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/nested_concat_align.html", VegaLite)
  case PopulationPyramidLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/concat_population_pyramid.html", VegaLite)
  case ChoroplethofUnemploymentRateperCountyLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/geo_choropleth.html", VegaLite)
  case OneDotperZipcodeintheU_S_Lite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/geo_circle.html", VegaLite)
  case OneDotperAirportintheU_S_OverlayedonGeoshapeLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/geo_layer.html", VegaLite)
  case Rules_linesegmentsConnectingSEAtoeveryAirportReachableviaDirectFlightsLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/geo_rule.html", VegaLite)
  case ThreeChoroplethsRepresentingDisjointDatafromtheSameTableLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/geo_repeat.html", VegaLite)
  case U_S_StateCapitalsOverlayedonaMapofU_S_Lite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/geo_text.html", VegaLite)
  case LinebetweenAirportsintheU_S_Lite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/geo_line.html", VegaLite)
  case IncomeintheU_S_byStateFacetedoverIncomeBracketsLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/geo_trellis.html", VegaLite)
  case LondonTubeLinesLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/geo_layer_line_london.html", VegaLite)
  case ProjectionexplorerLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/geo_params_projections.html", VegaLite)
  case BarChartwithHighlightingonHoverandSelectiononClickLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/interactive_bar_select_highlight.html", VegaLite)
  case InteractiveLegendLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/interactive_legend.html", VegaLite)
  case ScatterplotwithExternalLinksandTooltipsLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/point_href.html", VegaLite)
  case RectangularBrushLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/interactive_brush.html", VegaLite)
  case AreaChartwithRectangularBrushLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/interactive_area_brush.html", VegaLite)
  case PaintbrushHighlightLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/interactive_paintbrush.html", VegaLite)
  case ScatterplotPanZoomLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/selection_translate_scatterplot_drag.html", VegaLite)
  case QueryWidgetsLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/interactive_query_widgets.html", VegaLite)
  case InteractiveAverageLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/selection_layer_bar_month.html", VegaLite)
  case MultiSeriesLineChartwithInteractiveHighlightLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/interactive_line_hover.html", VegaLite)
  case MultiSeriesLineChartwithLabelsLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/interactive_multi_line_label.html", VegaLite)
  case MultiSeriesLineChartwithTooltipLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/interactive_multi_line_pivot_tooltip.html", VegaLite)
  case MultiSeriesLineChartwithTooltip0Lite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/interactive_multi_line_tooltip.html", VegaLite)
  case IsotypeGridLite extends SpecUrl("https://vega.github.io/vega-lite/examples/isotype_grid.html", VegaLite)
  case BrushingScatterPlottoshowdataonatableLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/brush_table.html", VegaLite)
  case SelectableHeatmapLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/selection_heatmap.html", VegaLite)
  case BarChartwithaMinimapLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/bar_count_minimap.html", VegaLite)
  case InteractiveIndexChartLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/interactive_index_chart.html", VegaLite)
  case Focus_Context_SmoothHistogramZoomingLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/interactive_bin_extent.html", VegaLite)
  case OverviewandDetailLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/interactive_overview_detail.html", VegaLite)
  case CrossfilterLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/interactive_layered_crossfilter.html", VegaLite)
  case InteractiveScatterplotMatrix0Lite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/interactive_splom.html", VegaLite)
  case InteractiveDashboardwithCrossHighlightLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/interactive_concat_layer.html", VegaLite)
  case SeattleWeatherExplorationLite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/interactive_seattle_weather.html", VegaLite)
  case ConnectionsamongMajorU_S_Airports_Lite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/airport_connections.html", VegaLite)
  case Aninteractivescatterplotofglobalhealthstatisticsbycountryandyear_Lite
      extends SpecUrl("https://vega.github.io/vega-lite/examples/interactive_global_development.html", VegaLite)
end SpecUrl
