import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface BlogPost {
  id: number
  title: string
  category: string
  date: string
  readTime: string
  excerpt: string
  content: React.ReactNode
  featured: boolean
  githubLink: string
}

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedPost, setExpandedPost] = useState<number | null>(null)

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Smart Reorder Point System for Grocery Stores',
      category: 'Operations Research',
      date: 'Dec 2024',
      readTime: '15 min read',
      featured: true,
      githubLink: 'https://github.com/Pravender/smart-reorder-system-EOQ',
      excerpt: 'A comprehensive Operations Research solution combining EOQ models with modern forecasting to optimize perishable inventory management.',
      content: (
        <div className="space-y-6 text-text-primary">
          {/* Problem Statement */}
          <section>
            <h3 className="text-2xl font-bold text-secondary-cyan mb-4">Problem Statement</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              Grocery stores face a critical operational challenge: managing perishable inventory efficiently while minimizing waste. 
              The food supply chain loses approximately <span className="text-secondary-cyan font-semibold">30-40% of food</span> annually, 
              representing billions in losses and significant environmental impact.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Traditional inventory management systems like EOQ (Economic Order Quantity) were designed for non-perishable goods and fail to account for:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
              <li>Product deterioration and spoilage over time</li>
              <li>Variable demand patterns (seasonal, weather-dependent, event-driven)</li>
              <li>Shelf life constraints and expiration dates</li>
              <li>Complex cost structures including disposal costs</li>
              <li>Lead time variability from suppliers</li>
            </ul>
          </section>

          {/* Intuition */}
          <section>
            <h3 className="text-2xl font-bold text-secondary-cyan mb-4">Core Intuition</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              The key insight is that <span className="text-secondary-cyan font-semibold">perishable inventory management requires a fundamentally different approach</span> than traditional inventory systems.
            </p>
            <div className="bg-primary-blue/10 border border-secondary-cyan/30 rounded-lg p-4 space-y-3">
              <div>
                <p className="font-semibold text-secondary-cyan">Traditional EOQ Thinking:</p>
                <p className="text-text-secondary text-sm">"Order larger quantities to reduce ordering costs"</p>
              </div>
              <div>
                <p className="font-semibold text-secondary-cyan">Perishable Inventory Thinking:</p>
                <p className="text-text-secondary text-sm">
                  "Balance order quantities against spoilage risk - larger orders may result in more waste than savings"
                </p>
              </div>
            </div>
            <p className="text-text-secondary leading-relaxed mt-4">
              The system combines three critical components:
            </p>
            <ul className="list-decimal list-inside text-text-secondary space-y-2 mt-3">
              <li><span className="font-semibold">Predictive Forecasting</span>: Anticipate demand using historical patterns and external factors</li>
              <li><span className="font-semibold">Dynamic Reorder Points</span>: Calculate when to order based on lead times and safety margins</li>
              <li><span className="font-semibold">Spoilage Optimization</span>: Factor deterioration costs into the equation</li>
            </ul>
          </section>

          {/* Mathematical Formulation */}
          <section>
            <h3 className="text-2xl font-bold text-secondary-cyan mb-4">Mathematical Formulation</h3>
            
            {/* Modified EOQ */}
            <div className="mb-6">
              <h4 className="text-xl font-bold text-primary-purple mb-3">Modified EOQ Model for Perishables</h4>
              <p className="text-text-secondary leading-relaxed mb-4">
                The traditional EOQ formula is insufficient for perishable goods. We enhance it by incorporating deterioration rate (θ) 
                and spoilage costs (Cs):
              </p>
              <div className="bg-primary-blue/20 border border-secondary-cyan/50 rounded-lg p-6 mb-4">
                <p className="font-mono text-secondary-cyan text-center text-lg font-bold">
                  Modified EOQ = √(2DS / (H + Cs × θ))
                </p>
              </div>
              <div className="space-y-2 text-text-secondary text-sm">
                <p><span className="font-semibold text-secondary-cyan">D</span> = Annual demand (units)</p>
                <p><span className="font-semibold text-secondary-cyan">S</span> = Ordering cost per order (₹)</p>
                <p><span className="font-semibold text-secondary-cyan">H</span> = Traditional holding cost per unit per year (₹)</p>
                <p><span className="font-semibold text-secondary-cyan">Cs</span> = Cost of spoiled goods per unit (₹)</p>
                <p><span className="font-semibold text-secondary-cyan">θ</span> = Deterioration rate (percentage per time period)</p>
              </div>
              <p className="text-text-secondary leading-relaxed mt-4 text-sm">
                This modification directly addresses the spoilage problem. Notice that as spoilage costs increase, the optimal 
                order quantity decreases - encouraging smaller, more frequent orders to reduce waste.
              </p>
            </div>

            {/* Holt-Winters */}
            <div className="mb-6">
              <h4 className="text-xl font-bold text-primary-purple mb-3">Demand Forecasting: Holt-Winters Exponential Smoothing</h4>
              <p className="text-text-secondary leading-relaxed mb-4">
                Traditional forecasting methods fail to capture the complex demand patterns in grocery retail. 
                We use <span className="font-semibold">Holt-Winters exponential smoothing</span>, which captures three critical components:
              </p>
              
              <div className="space-y-4">
                <div className="bg-primary-blue/10 border border-primary-purple/30 rounded-lg p-4">
                  <p className="font-semibold text-secondary-cyan mb-2">Level (Lt) - Base Demand</p>
                  <p className="font-mono text-sm text-secondary-cyan bg-black/30 p-2 rounded mb-2">
                    Lt = α(Dt/St-p) + (1-α)(Lt-1 + Bt-1)
                  </p>
                  <p className="text-text-secondary text-sm">
                    Captures the underlying demand level, adjusted for seasonal variations
                  </p>
                </div>

                <div className="bg-primary-blue/10 border border-primary-purple/30 rounded-lg p-4">
                  <p className="font-semibold text-secondary-cyan mb-2">Trend (Bt) - Growth/Decline Pattern</p>
                  <p className="font-mono text-sm text-secondary-cyan bg-black/30 p-2 rounded mb-2">
                    Bt = β(Lt - Lt-1) + (1-β)Bt-1
                  </p>
                  <p className="text-text-secondary text-sm">
                    Detects whether demand is increasing, decreasing, or stable over time
                  </p>
                </div>

                <div className="bg-primary-blue/10 border border-primary-purple/30 rounded-lg p-4">
                  <p className="font-semibold text-secondary-cyan mb-2">Seasonality (St) - Recurring Patterns</p>
                  <p className="font-mono text-sm text-secondary-cyan bg-black/30 p-2 rounded mb-2">
                    St = γ(Dt/Lt) + (1-γ)St-p
                  </p>
                  <p className="text-text-secondary text-sm">
                    Captures weekday/weekend variations, seasonal spikes, holiday effects
                  </p>
                </div>
              </div>

              <p className="text-text-secondary leading-relaxed mt-4 text-sm">
                Parameters α, β, γ (0-1) control the responsiveness to recent changes, with p being the seasonal period 
                (typically 7 for weekly patterns).
              </p>
            </div>

            {/* Regression Models */}
            <div className="mb-6">
              <h4 className="text-xl font-bold text-primary-purple mb-3">Regression Models for External Factors</h4>
              <p className="text-text-secondary leading-relaxed mb-4">
                Beyond historical patterns, external variables significantly impact perishable demand. We incorporate:
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-secondary-cyan font-bold">•</span>
                  <span><span className="font-semibold">Weather Conditions</span>: Temperature and rainfall affect fresh produce demand</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-cyan font-bold">•</span>
                  <span><span className="font-semibold">Local Events & Festivals</span>: Special occasions drive sudden demand spikes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-cyan font-bold">•</span>
                  <span><span className="font-semibold">Promotional Activities</span>: Discounts and offers increase sales velocity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-cyan font-bold">•</span>
                  <span><span className="font-semibold">Day-of-Week Effects</span>: Weekend shopping patterns differ from weekday patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-cyan font-bold">•</span>
                  <span><span className="font-semibold">Holiday Impacts</span>: Major holidays create predictable demand variations</span>
                </li>
              </ul>
            </div>

            {/* Reorder Point Calculation */}
            <div>
              <h4 className="text-xl font-bold text-primary-purple mb-3">Dynamic Reorder Point Calculation</h4>
              <p className="text-text-secondary leading-relaxed mb-4">
                The reorder point determines when to place a new order. For perishables, it must account for lead time variability 
                and spoilage risk:
              </p>
              <div className="bg-primary-blue/20 border border-secondary-cyan/50 rounded-lg p-6 mb-4">
                <p className="font-mono text-secondary-cyan text-center font-bold mb-3">
                  ROP = (Avg Daily Demand × Lead Time) + Safety Stock + Spoilage Buffer
                </p>
                <p className="font-mono text-secondary-cyan text-center text-sm">
                  Safety Stock = Z-score × √(LT × DV + AvgD² × LTV)
                </p>
              </div>
              <div className="space-y-2 text-text-secondary text-sm">
                <p><span className="font-semibold text-secondary-cyan">LT</span> = Lead time from supplier</p>
                <p><span className="font-semibold text-secondary-cyan">DV</span> = Demand variance</p>
                <p><span className="font-semibold text-secondary-cyan">LTV</span> = Lead time variance</p>
                <p><span className="font-semibold text-secondary-cyan">Z-score</span> = Service level (e.g., 1.65 for 95% service)</p>
              </div>
            </div>
          </section>

          {/* System Architecture */}
          <section>
            <h3 className="text-2xl font-bold text-secondary-cyan mb-4">System Architecture</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              The complete system integrates multiple components working in harmony:
            </p>
            
            <div className="space-y-4">
              <div className="bg-primary-blue/10 border border-secondary-cyan/30 rounded-lg p-4">
                <h5 className="font-semibold text-primary-purple mb-2">Data Collection Layer</h5>
                <ul className="text-text-secondary text-sm space-y-1 ml-4">
                  <li>• Historical sales data (minimum 2 years)</li>
                  <li>• Product specifications (shelf life, storage requirements)</li>
                  <li>• Cost parameters (purchase, storage, ordering, disposal)</li>
                  <li>• External factors (weather, events, promotions)</li>
                </ul>
              </div>

              <div className="bg-primary-blue/10 border border-secondary-cyan/30 rounded-lg p-4">
                <h5 className="font-semibold text-primary-purple mb-2">Real-Time Processing Layer</h5>
                <ul className="text-text-secondary text-sm space-y-1 ml-4">
                  <li>• <span className="font-semibold">Inventory Tracking</span>: Monitor stock levels in real-time, track FIFO</li>
                  <li>• <span className="font-semibold">Demand Forecasting</span>: Generate 7-14 day forecasts continuously</li>
                  <li>• <span className="font-semibold">Reorder Calculation</span>: Update reorder points based on latest data</li>
                  <li>• <span className="font-semibold">Alert Generation</span>: Trigger orders when stock threshold reached</li>
                </ul>
              </div>

              <div className="bg-primary-blue/10 border border-secondary-cyan/30 rounded-lg p-4">
                <h5 className="font-semibold text-primary-purple mb-2">Optimization & Monitoring Layer</h5>
                <ul className="text-text-secondary text-sm space-y-1 ml-4">
                  <li>• Parameter optimization using sensitivity analysis</li>
                  <li>• Performance tracking (stockout rate, spoilage, turnover)</li>
                  <li>• Continuous model refinement based on actual outcomes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Implementation Details */}
          <section>
            <h3 className="text-2xl font-bold text-secondary-cyan mb-4">Implementation Framework</h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-bold text-primary-purple mb-3">Technology Stack</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-primary-blue/10 border border-primary-purple/30 rounded-lg p-3">
                  <p className="font-semibold text-secondary-cyan text-sm">Backend</p>
                  <p className="text-text-secondary text-sm">Python with pandas, numpy, scipy</p>
                </div>
                <div className="bg-primary-blue/10 border border-primary-purple/30 rounded-lg p-3">
                  <p className="font-semibold text-secondary-cyan text-sm">Optimization</p>
                  <p className="text-text-secondary text-sm">Gurobi solver for constraints</p>
                </div>
                <div className="bg-primary-blue/10 border border-primary-purple/30 rounded-lg p-3">
                  <p className="font-semibold text-secondary-cyan text-sm">Forecasting</p>
                  <p className="text-text-secondary text-sm">scikit-learn, statsmodels</p>
                </div>
                <div className="bg-primary-blue/10 border border-primary-purple/30 rounded-lg p-3">
                  <p className="font-semibold text-secondary-cyan text-sm">Database</p>
                  <p className="text-text-secondary text-sm">PostgreSQL for data storage</p>
                </div>
                <div className="bg-primary-blue/10 border border-primary-purple/30 rounded-lg p-3">
                  <p className="font-semibold text-secondary-cyan text-sm">Real-time</p>
                  <p className="text-text-secondary text-sm">Apache Kafka streaming</p>
                </div>
                <div className="bg-primary-blue/10 border border-primary-purple/30 rounded-lg p-3">
                  <p className="font-semibold text-secondary-cyan text-sm">Dashboard</p>
                  <p className="text-text-secondary text-sm">Streamlit for visualization</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-primary-purple mb-3">Algorithm Workflow</h4>
              <ol className="space-y-3 text-text-secondary text-sm">
                <li className="flex gap-3">
                  <span className="font-bold text-secondary-cyan min-w-fit">1. Preprocessing:</span>
                  <span>Clean historical sales data, handle missing values, identify outliers</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-secondary-cyan min-w-fit">2. Forecasting:</span>
                  <span>Generate 7-14 day demand forecasts using Holt-Winters + regression</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-secondary-cyan min-w-fit">3. Optimization:</span>
                  <span>Calculate optimal EOQ and reorder points considering perishability</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-secondary-cyan min-w-fit">4. Alerting:</span>
                  <span>Trigger reorder alerts when stock falls below calculated thresholds</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-secondary-cyan min-w-fit">5. Monitoring:</span>
                  <span>Track actual vs. predicted demand, adjust parameters accordingly</span>
                </li>
              </ol>
            </div>
          </section>

          {/* Business Value */}
          <section>
            <h3 className="text-2xl font-bold text-secondary-cyan mb-4">Business Value Proposition</h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-bold text-primary-purple mb-3">Cost Reduction Opportunities</h4>
              <ul className="space-y-3 text-text-secondary text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-secondary-cyan font-bold min-w-fit">📉</span>
                  <div>
                    <span className="font-semibold">Reduced Spoilage:</span> 20-30% decrease in product waste through optimized ordering
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-cyan font-bold min-w-fit">💰</span>
                  <div>
                    <span className="font-semibold">Lower Holding Costs:</span> Minimize excess inventory while maintaining service levels
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-cyan font-bold min-w-fit">💳</span>
                  <div>
                    <span className="font-semibold">Improved Cash Flow:</span> Reduce capital tied up in slow-moving inventory
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-cyan font-bold min-w-fit">🤝</span>
                  <div>
                    <span className="font-semibold">Supplier Relationships:</span> More predictable ordering patterns improve negotiation power
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-primary-purple mb-3">Operational Benefits</h4>
              <ul className="space-y-3 text-text-secondary text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-secondary-cyan font-bold min-w-fit">🤖</span>
                  <div>
                    <span className="font-semibold">Automated Decision Making:</span> Eliminate manual reorder calculations
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-cyan font-bold min-w-fit">🛡️</span>
                  <div>
                    <span className="font-semibold">Risk Mitigation:</span> Reduce stockout risk while minimizing spoilage
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-cyan font-bold min-w-fit">📈</span>
                  <div>
                    <span className="font-semibold">Scalability:</span> Handle multiple SKUs across different product categories
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-cyan font-bold min-w-fit">🔗</span>
                  <div>
                    <span className="font-semibold">Integration:</span> Connect with existing POS and ERP systems seamlessly
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Key Metrics */}
          <section>
            <h3 className="text-2xl font-bold text-secondary-cyan mb-4">Key Performance Indicators</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 border border-secondary-cyan/30 rounded-lg p-4">
                <p className="font-semibold text-secondary-cyan mb-2">Stockout Frequency</p>
                <p className="text-2xl font-bold text-primary-purple">{'<'}2%</p>
                <p className="text-text-secondary text-sm mt-1">Target service level maintained</p>
              </div>
              <div className="bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 border border-secondary-cyan/30 rounded-lg p-4">
                <p className="font-semibold text-secondary-cyan mb-2">Spoilage Rate</p>
                <p className="text-2xl font-bold text-primary-purple">{'<'}5%</p>
                <p className="text-text-secondary text-sm mt-1">Reduced from 30-40% baseline</p>
              </div>
              <div className="bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 border border-secondary-cyan/30 rounded-lg p-4">
                <p className="font-semibold text-secondary-cyan mb-2">Waste Reduction</p>
                <p className="text-2xl font-bold text-primary-purple">20-45%</p>
                <p className="text-text-secondary text-sm mt-1">Potential improvement range</p>
              </div>
              <div className="bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 border border-secondary-cyan/30 rounded-lg p-4">
                <p className="font-semibold text-secondary-cyan mb-2">Inventory Turnover</p>
                <p className="text-2xl font-bold text-primary-purple">↑ 25-40%</p>
                <p className="text-text-secondary text-sm mt-1">Faster moving inventory</p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h3 className="text-2xl font-bold text-secondary-cyan mb-4">Conclusion</h3>
            <p className="text-text-secondary leading-relaxed">
              The Smart Reorder Point System represents a sophisticated yet practical solution to one of the most pressing challenges 
              in retail operations: reducing food waste while maintaining customer satisfaction. By combining mathematical optimization 
              with real-time data processing, the system enables grocery stores to make intelligent, data-driven inventory decisions.
            </p>
            <p className="text-text-secondary leading-relaxed mt-4">
              The research indicates potential waste reductions of 20-45% through optimal order quantity management, translating to 
              significant cost savings and environmental impact. As grocery chains increasingly focus on sustainability and efficiency, 
              systems like this will become essential components of competitive operations.
            </p>
          </section>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Customer Churn Prediction using Artificial Neural Networks',
      category: 'Machine Learning',
      date: 'Dec 2024',
      readTime: '12 min read',
      featured: false,
      githubLink: 'https://github.com/Pravender/ANN-Classification-Churn',
      excerpt: 'Deep dive into building an ANN classifier for predicting customer churn using real banking data with comprehensive preprocessing and feature engineering.',
      content: (
        <div className="space-y-6 text-text-primary">
          {/* Problem Statement */}
          <section>
            <h3 className="text-2xl font-bold text-secondary-cyan mb-4">Problem Statement</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              In the highly competitive banking and financial services industry, <span className="text-secondary-cyan font-semibold">customer retention is critical</span>. 
              Every customer lost represents not only immediate revenue loss but also expensive acquisition costs for replacement customers.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              The challenge: Given a customer's profile and behavior data, can we predict whether they will leave the bank (churn) in the near future?
            </p>
            <p className="text-text-secondary leading-relaxed">
              Traditional rule-based approaches fail because:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
              <li>Churn patterns are non-linear and complex</li>
              <li>Multiple features interact in subtle ways (e.g., age × credit score × balance)</li>
              <li>Customer behavior evolves over time</li>
              <li>Manual rules become outdated quickly</li>
              <li>Difficult to capture domain knowledge programmatically</li>
            </ul>
          </section>

          {/* Business Impact */}
          <section>
            <h3 className="text-2xl font-bold text-secondary-cyan mb-4">Business Impact</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              Customer churn prediction enables proactive retention strategies:
            </p>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li className="flex items-start gap-3">
                <span className="text-secondary-cyan font-bold min-w-fit">🎯</span>
                <div>
                  <span className="font-semibold">Targeted Interventions:</span> Identify at-risk customers before they leave
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary-cyan font-bold min-w-fit">💰</span>
                <div>
                  <span className="font-semibold">Cost Reduction:</span> Retention is 5-25x cheaper than acquisition
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary-cyan font-bold min-w-fit">📈</span>
                <div>
                  <span className="font-semibold">Revenue Protection:</span> Prevent loss of high-value customers
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary-cyan font-bold min-w-fit">🔍</span>
                <div>
                  <span className="font-semibold">Insights:</span> Understand key factors driving churn
                </div>
              </li>
            </ul>
          </section>

          {/* Dataset Overview */}
          <section>
            <h3 className="text-2xl font-bold text-secondary-cyan mb-4">Dataset Overview</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              The model is trained on a comprehensive banking dataset containing customer information:
            </p>
            <div className="bg-primary-blue/10 border border-secondary-cyan/30 rounded-lg p-4 space-y-3">
              <div>
                <p className="font-semibold text-secondary-cyan text-sm">Dataset Characteristics:</p>
                <ul className="text-text-secondary text-sm space-y-1 ml-4 mt-2">
                  <li>• <span className="font-semibold">Sample Size:</span> Thousands of customer records</li>
                  <li>• <span className="font-semibold">Features:</span> 11+ input features including demographics and account info</li>
                  <li>• <span className="font-semibold">Target:</span> Binary classification (Churned: Yes/No)</li>
                  <li>• <span className="font-semibold">Class Balance:</span> Imbalanced (majority of customers don't churn)</li>
                </ul>
              </div>
            </div>
            <p className="text-text-secondary leading-relaxed mt-4">
              Key features include customer age, tenure, balance, credit score, geographic location, product usage, and activity metrics.
            </p>
          </section>

          {/* Data Preprocessing */}
          <section>
            <h3 className="text-2xl font-bold text-secondary-cyan mb-4">Data Preprocessing & Feature Engineering</h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-bold text-primary-purple mb-3">1. Encoding Categorical Variables</h4>
              <p className="text-text-secondary leading-relaxed mb-3 text-sm">
                Neural networks require numerical inputs. Categorical features must be encoded appropriately:
              </p>
              <div className="space-y-3">
                <div className="bg-primary-blue/10 border border-primary-purple/30 rounded-lg p-3">
                  <p className="font-semibold text-secondary-cyan text-sm mb-1">Label Encoding (Binary Categories)</p>
                  <p className="text-text-secondary text-sm">
                    Gender → {'{'}Female: 0, Male: 1{'}'} using LabelEncoder
                  </p>
                </div>
                <div className="bg-primary-blue/10 border border-primary-purple/30 rounded-lg p-3">
                  <p className="font-semibold text-secondary-cyan text-sm mb-1">One-Hot Encoding (Multi-class)</p>
                  <p className="text-text-secondary text-sm">
                    Geography → France, Germany, Spain become 3 binary columns using OneHotEncoder
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-primary-purple mb-3">2. Feature Scaling</h4>
              <p className="text-text-secondary leading-relaxed mb-3 text-sm">
                Features have different ranges (age: 18-96, balance: 0-250000). Neural networks perform better with normalized data:
              </p>
              <div className="bg-primary-blue/20 border border-secondary-cyan/50 rounded-lg p-4">
                <p className="font-mono text-secondary-cyan text-center text-sm font-bold mb-2">
                  Scaled Value = (X - Mean) / Standard Deviation
                </p>
                <p className="text-text-secondary text-sm">
                  Standardization ensures all features contribute equally to the learning process and improves convergence speed.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-primary-purple mb-3">3. Train-Test Split</h4>
              <p className="text-text-secondary leading-relaxed text-sm">
                Data is split into training (70-80%) and testing (20-30%) sets to prevent overfitting and enable proper model evaluation.
              </p>
            </div>
          </section>

          {/* Model Architecture */}
          <section>
            <h3 className="text-2xl font-bold text-secondary-cyan mb-4">Artificial Neural Network Architecture</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              An ANN is inspired by biological neurons and consists of interconnected layers that learn non-linear relationships:
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-primary-purple mb-3">Network Structure</h4>
              <div className="bg-primary-blue/10 border border-secondary-cyan/30 rounded-lg p-4">
                <p className="text-text-secondary text-sm mb-3 font-mono">
                  Input Layer → Hidden Layer(s) → Output Layer
                </p>
                <ul className="text-text-secondary text-sm space-y-2 ml-4">
                  <li>• <span className="font-semibold">Input Layer:</span> 11 neurons (one per feature)</li>
                  <li>• <span className="font-semibold">Hidden Layers:</span> 64 → 32 neurons with ReLU activation</li>
                  <li>• <span className="font-semibold">Dropout:</span> 20% dropout to prevent overfitting</li>
                  <li>• <span className="font-semibold">Output Layer:</span> 1 neuron with Sigmoid activation</li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-primary-purple mb-3">Activation Functions</h4>
              <div className="space-y-3">
                <div className="bg-primary-blue/10 border border-primary-purple/30 rounded-lg p-3">
                  <p className="font-semibold text-secondary-cyan text-sm mb-1">ReLU (Hidden Layers)</p>
                  <p className="font-mono text-secondary-cyan text-xs bg-black/30 p-1 rounded mb-1">
                    ReLU(x) = max(0, x)
                  </p>
                  <p className="text-text-secondary text-sm">
                    Introduces non-linearity, helps network learn complex patterns, computationally efficient
                  </p>
                </div>
                <div className="bg-primary-blue/10 border border-primary-purple/30 rounded-lg p-3">
                  <p className="font-semibold text-secondary-cyan text-sm mb-1">Sigmoid (Output Layer)</p>
                  <p className="font-mono text-secondary-cyan text-xs bg-black/30 p-1 rounded mb-1">
                    Sigmoid(x) = 1 / (1 + e^(-x))
                  </p>
                  <p className="text-text-secondary text-sm">
                    Maps output to (0,1) range, ideal for binary classification probability
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-primary-purple mb-3">Loss Function & Optimization</h4>
              <div className="bg-primary-blue/10 border border-secondary-cyan/30 rounded-lg p-4 space-y-2">
                <p className="text-text-secondary text-sm">
                  <span className="font-semibold">Loss Function:</span> Binary Crossentropy (for binary classification)
                </p>
                <p className="text-text-secondary text-sm">
                  <span className="font-semibold">Optimizer:</span> Adam (Adaptive Moment Estimation) for efficient convergence
                </p>
                <p className="text-text-secondary text-sm">
                  <span className="font-semibold">Metric:</span> Accuracy and AUC-ROC for performance evaluation
                </p>
              </div>
            </div>
          </section>

          {/* Training Process */}
          <section>
            <h3 className="text-2xl font-bold text-secondary-cyan mb-4">Training Process</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              The model learns by iteratively:
            </p>
            <ol className="space-y-3 text-text-secondary text-sm">
              <li className="flex gap-3">
                <span className="font-bold text-secondary-cyan min-w-fit">1. Forward Pass:</span>
                <span>Input data flows through network, predictions are made</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-secondary-cyan min-w-fit">2. Compute Loss:</span>
                <span>Compare predictions with actual values using crossentropy</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-secondary-cyan min-w-fit">3. Backpropagation:</span>
                <span>Calculate gradients of loss with respect to weights</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-secondary-cyan min-w-fit">4. Update Weights:</span>
                <span>Adjust weights to minimize loss using Adam optimizer</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-secondary-cyan min-w-fit">5. Repeat:</span>
                <span>Multiple epochs until convergence (validation accuracy plateaus)</span>
              </li>
            </ol>
          </section>

          {/* Model Evaluation */}
          <section>
            <h3 className="text-2xl font-bold text-secondary-cyan mb-4">Model Evaluation Metrics</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              For imbalanced classification problems, accuracy alone is misleading:
            </p>

            <div className="space-y-4">
              <div className="bg-primary-blue/10 border border-secondary-cyan/30 rounded-lg p-4">
                <p className="font-semibold text-secondary-cyan text-sm mb-2">Accuracy</p>
                <p className="text-text-secondary text-sm">
                  Percentage of correct predictions. However, if only 20% of customers churn, a model predicting "no churn" for everyone would be 80% accurate.
                </p>
              </div>

              <div className="bg-primary-blue/10 border border-secondary-cyan/30 rounded-lg p-4">
                <p className="font-semibold text-secondary-cyan text-sm mb-2">Precision & Recall</p>
                <p className="text-text-secondary text-sm mb-2">
                  <span className="font-semibold">Precision:</span> Of predicted churners, how many actually churned?
                </p>
                <p className="text-text-secondary text-sm">
                  <span className="font-semibold">Recall:</span> Of actual churners, how many did we identify?
                </p>
              </div>

              <div className="bg-primary-blue/10 border border-secondary-cyan/30 rounded-lg p-4">
                <p className="font-semibold text-secondary-cyan text-sm mb-2">AUC-ROC (Area Under Curve)</p>
                <p className="text-text-secondary text-sm">
                  Measures the model's ability to distinguish between classes across all thresholds. Range: 0-1, where 1 is perfect.
                </p>
              </div>

              <div className="bg-primary-blue/10 border border-secondary-cyan/30 rounded-lg p-4">
                <p className="font-semibold text-secondary-cyan text-sm mb-2">Confusion Matrix</p>
                <p className="text-text-secondary text-sm">
                  Shows True Positives (TP), False Positives (FP), True Negatives (TN), and False Negatives (FN) for detailed error analysis.
                </p>
              </div>
            </div>
          </section>

          {/* Deployment */}
          <section>
            <h3 className="text-2xl font-bold text-secondary-cyan mb-4">Production Deployment</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              The trained model is deployed as a Streamlit web application for real-time predictions:
            </p>
            
            <div className="bg-primary-blue/10 border border-secondary-cyan/30 rounded-lg p-4 space-y-3">
              <div>
                <p className="font-semibold text-secondary-cyan text-sm">Live Application:</p>
                <p className="text-text-secondary text-sm">
                  <a href="https://ann-classification-churn-egtp7tjkyibs4uthrcklja.streamlit.app/" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-secondary-cyan hover:text-primary-purple transition-colors">
                    https://ann-classification-churn-egtp7tjkyibs4uthrcklja.streamlit.app/
                  </a>
                </p>
              </div>
              <div>
                <p className="font-semibold text-secondary-cyan text-sm">Features:</p>
                <ul className="text-text-secondary text-sm space-y-1 ml-4">
                  <li>• Input customer features via web interface</li>
                  <li>• Real-time churn probability prediction</li>
                  <li>• Feature importance visualization</li>
                  <li>• Batch prediction for multiple customers</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Insights */}
          <section>
            <h3 className="text-2xl font-bold text-secondary-cyan mb-4">Key Insights & Learnings</h3>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li className="flex items-start gap-3">
                <span className="text-secondary-cyan font-bold min-w-fit">💡</span>
                <div>
                  <span className="font-semibold">Data Preprocessing is Critical:</span> 80% of project time goes into data preparation. Poor preprocessing leads to poor models.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary-cyan font-bold min-w-fit">⚖️</span>
                <div>
                  <span className="font-semibold">Handle Class Imbalance:</span> Imbalanced datasets require careful metrics selection and sometimes resampling techniques.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary-cyan font-bold min-w-fit">🔄</span>
                <div>
                  <span className="font-semibold">Dropout Prevents Overfitting:</span> Regularization is essential for good generalization on unseen data.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary-cyan font-bold min-w-fit">📊</span>
                <div>
                  <span className="font-semibold">Interpretability Matters:</span> Understanding which features drive predictions is crucial for business stakeholders.
                </div>
              </li>
            </ul>
          </section>

          {/* Conclusion */}
          <section>
            <h3 className="text-2xl font-bold text-secondary-cyan mb-4">Conclusion</h3>
            <p className="text-text-secondary leading-relaxed">
              Customer churn prediction using Artificial Neural Networks demonstrates the power of deep learning for real-world business problems. 
              By capturing non-linear relationships between customer features and churn behavior, ANNs outperform traditional linear models.
            </p>
            <p className="text-text-secondary leading-relaxed mt-4">
              The end-to-end pipeline—from raw data to deployed model—showcases essential ML engineering practices: proper preprocessing, 
              thoughtful model architecture, rigorous evaluation, and practical deployment. For financial institutions, this type of model 
              can translate directly into millions in retained revenue.
            </p>
          </section>
        </div>
      ),
    },
  ]

  const categories = ['all', 'Operations Research', 'Machine Learning', 'Web Development']
  
  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <section id="blog" className="py-20 px-4 bg-gradient-to-b from-primary-blue/5 to-primary-purple/5 relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-primary-purple to-secondary-cyan rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading neon-glow mb-4">Technical Blog</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Deep dives into Operations Research, Machine Learning, and system design challenges I've solved
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-primary-blue to-primary-purple text-white shadow-lg shadow-primary-purple/50'
                  : 'bg-primary-blue/10 border border-primary-blue/30 text-text-secondary hover:border-secondary-cyan'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="space-y-6">
          {filteredPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Card Header */}
              <motion.div
                onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                className="glass-effect-strong p-6 rounded-lg border border-primary-blue/20 hover:border-secondary-cyan/50 transition-all cursor-pointer"
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(124, 58, 237, 0.2)' }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      {post.featured && (
                        <span className="px-3 py-1 bg-secondary-cyan/20 border border-secondary-cyan/50 rounded-full text-secondary-cyan text-xs font-bold">
                          Featured
                        </span>
                      )}
                      <span className="px-3 py-1 bg-primary-purple/20 border border-primary-purple/50 rounded-full text-primary-purple text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary group-hover:text-secondary-cyan transition-colors mb-2">
                      {post.title}
                    </h3>
                    <p className="text-text-secondary mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex gap-4 text-text-secondary text-sm">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <motion.a
                      href={post.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-3 rounded-lg bg-primary-blue/10 hover:bg-primary-purple/20 transition-all"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaGithub className="text-secondary-cyan text-xl" />
                    </motion.a>
                    <motion.div
                      animate={{ rotate: expandedPost === post.id ? 90 : 0 }}
                      className="p-3 rounded-lg bg-primary-blue/10 group-hover:bg-secondary-cyan/20"
                    >
                      <FaArrowRight className="text-secondary-cyan text-xl" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Expanded Content */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: expandedPost === post.id ? 1 : 0,
                  height: expandedPost === post.id ? 'auto' : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="glass-effect-strong border-l-2 border-secondary-cyan ml-3 mt-2 p-6 rounded-lg rounded-tl-none border-t-0">
                  {post.content}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary mb-4">
            More detailed documentation available on GitHub
          </p>
          <motion.a
            href="https://github.com/Pravender/smart-reorder-system-EOQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-blue to-primary-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-purple/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View on GitHub
            <FaExternalLinkAlt className="text-sm" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
