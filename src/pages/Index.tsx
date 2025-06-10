
import React from 'react';
import Header from '../components/Header';
import SensitivityCalculator from '../components/SensitivityCalculator';
import FeatureCard from '../components/FeatureCard';
import { Calculator, Target, Zap, Shield } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-8 pb-12">
        <div className="text-center mb-12">
          <img 
            src="https://iili.io/3pCmLNa.png" 
            alt="FF TOOLSPRO+ Logo" 
            className="w-32 h-32 mx-auto mb-6 rounded-2xl shadow-2xl border-4 border-purple-500"
          />
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            FF TOOLSPRO+
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Tools terlengkap untuk Free Fire! Kalkulator sensitivitas akurat, tips pro, dan fitur premium lainnya.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold">
              ⚡ Update Terbaru
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full text-sm font-semibold">
              🎯 100% Akurat
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full text-sm font-semibold">
              🔥 Pro Features
            </span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <FeatureCard
            icon={<Calculator className="w-8 h-8" />}
            title="Sensitivity Calculator"
            description="Kalkulator sensitivitas akurat dengan maksimal 200 sensitivity"
            gradient="from-blue-500 to-purple-600"
          />
          <FeatureCard
            icon={<Target className="w-8 h-8" />}
            title="Aim Training"
            description="Tips dan trik untuk meningkatkan akurasi aim Anda"
            gradient="from-green-500 to-emerald-600"
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8" />}
            title="Pro Settings"
            description="Pengaturan pro player untuk performa maksimal"
            gradient="from-yellow-500 to-orange-600"
          />
          <FeatureCard
            icon={<Shield className="w-8 h-8" />}
            title="Game Booster"
            description="Optimasi device untuk gameplay yang lebih smooth"
            gradient="from-purple-500 to-pink-600"
          />
        </div>

        {/* Main Calculator */}
        <SensitivityCalculator />
      </div>
    </div>
  );
};

export default Index;
