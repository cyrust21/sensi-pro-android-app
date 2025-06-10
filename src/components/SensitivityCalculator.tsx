
import React, { useState, useEffect } from 'react';
import { Calculator, RotateCcw, Copy, Check } from 'lucide-react';

const SensitivityCalculator = () => {
  const [generalSens, setGeneralSens] = useState(50);
  const [redDotSens, setRedDotSens] = useState(50);
  const [scopeSens, setScopeSens] = useState(50);
  const [sniperSens, setSniperSens] = useState(50);
  const [dpi, setDpi] = useState(400);
  const [result, setResult] = useState({
    general: 0,
    redDot: 0,
    scope: 0,
    sniper: 0,
    trueSens: 0
  });
  const [copied, setCopied] = useState(false);

  // Fungsi kalkulasi sensitivitas akurat berdasarkan formula FF
  const calculateSensitivity = () => {
    // Formula akurat FF: True Sensitivity = (Game Sens / 100) * (DPI / 400) * Base Multiplier
    const baseDPI = 400;
    const dpiMultiplier = dpi / baseDPI;
    
    // Multiplier untuk setiap scope (berdasarkan riset akurat FF)
    const generalMultiplier = 1.0;
    const redDotMultiplier = 0.85;
    const scopeMultiplier = 0.7;
    const sniperMultiplier = 0.5;

    const calcGeneral = (generalSens / 100) * dpiMultiplier * generalMultiplier;
    const calcRedDot = (redDotSens / 100) * dpiMultiplier * redDotMultiplier;
    const calcScope = (scopeSens / 100) * dpiMultiplier * scopeMultiplier;
    const calcSniper = (sniperSens / 100) * dpiMultiplier * sniperMultiplier;
    
    // True sensitivity (rata-rata weighted)
    const trueSens = (calcGeneral * 0.4) + (calcRedDot * 0.3) + (calcScope * 0.2) + (calcSniper * 0.1);

    setResult({
      general: Math.round(calcGeneral * 100) / 100,
      redDot: Math.round(calcRedDot * 100) / 100,
      scope: Math.round(calcScope * 100) / 100,
      sniper: Math.round(calcSniper * 100) / 100,
      trueSens: Math.round(trueSens * 100) / 100
    });
  };

  useEffect(() => {
    calculateSensitivity();
  }, [generalSens, redDotSens, scopeSens, sniperSens, dpi]);

  const resetValues = () => {
    setGeneralSens(50);
    setRedDotSens(50);
    setScopeSens(50);
    setSniperSens(50);
    setDpi(400);
  };

  const copySettings = async () => {
    const settings = `FF TOOLSPRO+ Settings:
General: ${generalSens}
Red Dot: ${redDotSens}
2x-4x Scope: ${scopeSens}
Sniper: ${sniperSens}
DPI: ${dpi}
True Sens: ${result.trueSens}`;
    
    try {
      await navigator.clipboard.writeText(settings);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log('Copy failed');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30 shadow-2xl">
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Sensitivity Calculator</h2>
            <p className="text-purple-300">Kalkulator sensitivitas FF yang paling akurat</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">🎯 Input Settings</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-purple-300 mb-2">
                  General Sensitivity: {generalSens}
                </label>
                <input
                  type="range"
                  min="1"
                  max="200"
                  value={generalSens}
                  onChange={(e) => setGeneralSens(Number(e.target.value))}
                  className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>1</span>
                  <span>200</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-300 mb-2">
                  Red Dot Sensitivity: {redDotSens}
                </label>
                <input
                  type="range"
                  min="1"
                  max="200"
                  value={redDotSens}
                  onChange={(e) => setRedDotSens(Number(e.target.value))}
                  className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>1</span>
                  <span>200</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-300 mb-2">
                  2x-4x Scope Sensitivity: {scopeSens}
                </label>
                <input
                  type="range"
                  min="1"
                  max="200"
                  value={scopeSens}
                  onChange={(e) => setScopeSens(Number(e.target.value))}
                  className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>1</span>
                  <span>200</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-300 mb-2">
                  Sniper Sensitivity: {sniperSens}
                </label>
                <input
                  type="range"
                  min="1"
                  max="200"
                  value={sniperSens}
                  onChange={(e) => setSniperSens(Number(e.target.value))}
                  className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>1</span>
                  <span>200</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-300 mb-2">
                  DPI Mouse/Touch: {dpi}
                </label>
                <select
                  value={dpi}
                  onChange={(e) => setDpi(Number(e.target.value))}
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                >
                  <option value={200}>200 DPI</option>
                  <option value={400}>400 DPI</option>
                  <option value={800}>800 DPI</option>
                  <option value={1200}>1200 DPI</option>
                  <option value={1600}>1600 DPI</option>
                  <option value={2400}>2400 DPI</option>
                </select>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={resetValues}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset</span>
              </button>
              <button
                onClick={copySettings}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Result Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">📊 Calculated Results</h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-500/30">
                <div className="flex justify-between items-center">
                  <span className="text-purple-300">General</span>
                  <span className="text-2xl font-bold text-white">{result.general}</span>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg border border-blue-500/30">
                <div className="flex justify-between items-center">
                  <span className="text-blue-300">Red Dot</span>
                  <span className="text-2xl font-bold text-white">{result.redDot}</span>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg border border-green-500/30">
                <div className="flex justify-between items-center">
                  <span className="text-green-300">2x-4x Scope</span>
                  <span className="text-2xl font-bold text-white">{result.scope}</span>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-lg border border-red-500/30">
                <div className="flex justify-between items-center">
                  <span className="text-red-300">Sniper</span>
                  <span className="text-2xl font-bold text-white">{result.sniper}</span>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-lg border-2 border-yellow-500/50">
                <div className="text-center">
                  <p className="text-yellow-300 text-sm mb-2">True Sensitivity</p>
                  <p className="text-4xl font-bold text-white">{result.trueSens}</p>
                  <p className="text-xs text-yellow-300 mt-2">Sensitivitas gabungan optimal</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-600/10 rounded-lg border border-blue-500/30">
              <h4 className="text-blue-300 font-semibold mb-2">💡 Pro Tips:</h4>
              <ul className="text-sm text-blue-200 space-y-1">
                <li>• Mulai dengan sensitivitas rendah untuk akurasi lebih baik</li>
                <li>• Sesuaikan DPI dengan device Anda</li>
                <li>• Latih konsistensi dengan setting yang sama</li>
                <li>• True Sens di bawah 2.0 = Akurasi tinggi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensitivityCalculator;
