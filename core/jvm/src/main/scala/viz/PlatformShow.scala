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

package viz

import viz.PlotTarget
import viz.TempFileTarget
import viz.Png
import viz.Html
import viz.LowPriorityPlotTarget

trait PlatformShow(using plotTarget: LowPriorityPlotTarget) extends Spec:
  // def show(using plotTarget: PlotTarget): Unit | os.Path = plotTarget.show(spec)

  // lazy val tempPath : Option[os.Path] = plotTarget match
  //   case t : TempFileTarget[A] => Some(t.tempPath(spec))
  //   case _ => None

  private lazy val conf = org.ekrich.config.ConfigFactory.load()
  private lazy val outPath: Option[String] =
    val pathIsSet: Boolean = conf.hasPath("dedavOutPath")
    if pathIsSet then Some(conf.getString("dedavOutPath"))
    else None
    end if
  end outPath

  lazy val tmpPath: Option[os.Path] =
    plotTarget match
      case ut: UnitTarget => None
      case t: TempFileTarget =>
        val suffix = t.ext.ext
        outPath match
          case Some(path) =>
            Some(os.temp(dir = os.Path(path), suffix = suffix, prefix = "plot-"))
          case None =>
            Some(os.temp(suffix = suffix, prefix = "plot-"))
        end match

  private val showMe = plotTarget match
    case ut: UnitTarget     => ut.show(spec)
    case ut: TempFileTarget => ut.showWithTempFile(spec, tmpPath.get)
    case _                  => ()
end PlatformShow

// This is the line, which actually triggers plotting the chart