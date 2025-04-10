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

import scala.annotation.nowarn

enum ChartLibrary:
  case Vega, Echarts
end ChartLibrary

// we need the parameter later
@nowarn
trait Spec(chartLibrary: ChartLibrary):
  def spec: String = ???

  def jsonSpec = ujson.read(spec)
end Spec
