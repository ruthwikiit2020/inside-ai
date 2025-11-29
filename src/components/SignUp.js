import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './AnimatedSection';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    role: '',
    project: '',
    usage: '',
    feedback: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbys84NooE31wp761EO4MUlOm4ys9ZEHRPomu0k6EFqoOC3ofSK89gEzkoENwR1J_TM/exec';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    console.log('Submitting form data:', formData);
    console.log('Google Script URL:', GOOGLE_SCRIPT_URL);

    try {
      // Create a hidden iframe for submission (bypasses CORS)
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = 'hidden_iframe';
      document.body.appendChild(iframe);

      // Create a temporary form
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = GOOGLE_SCRIPT_URL;
      form.target = 'hidden_iframe';

      // Add form fields
      Object.keys(formData).forEach(key => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = formData[key];
        form.appendChild(input);
      });

      // Submit form
      document.body.appendChild(form);
      form.submit();

      console.log('Form submitted successfully via iframe method');

      // Clean up
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
      }, 1000);
      
      // Show success message
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        email: '',
        role: '',
        project: '',
        usage: '',
        feedback: ''
      });

      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

    } catch (err) {
      console.error('Error submitting form:', err);
      console.error('Error details:', err.message);
      setError('Something went wrong. Please try again or contact support.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="signup">
      <div className="container">
        <div className="signup-header">
          <FadeIn>
            <h2 className="section-title">Step Inside Early</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="section-description">
              Join the early access list and help us shape Inside AI for serious storytellers.
            </p>
          </FadeIn>
        </div>
        
        <FadeIn delay={0.3}>
          <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email <span className="required">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="role">What best describes you?</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">Select one...</option>
                <option value="screenwriter">Screenwriter</option>
                <option value="novelist">Novelist</option>
                <option value="director">Director</option>
                <option value="actor">Actor</option>
                <option value="game-designer">Game Designer</option>
                <option value="showrunner">Showrunner</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="project">What are you currently working on?</label>
              <textarea
                id="project"
                name="project"
                placeholder="A short description..."
                rows="3"
                value={formData.project}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="usage">How would you use Inside AI in your process?</label>
              <textarea
                id="usage"
                name="usage"
                placeholder="Share your thoughts..."
                rows="3"
                value={formData.usage}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="feedback">Would you be open to a 20-minute feedback call?</label>
              <select
                id="feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
              >
                <option value="">Select one...</option>
                <option value="yes">Yes, I'd love to help</option>
                <option value="maybe">Maybe later</option>
                <option value="no">No, just updates please</option>
              </select>
            </div>

            <div className="form-group form-placeholder">
              {/* Empty space for symmetry */}
            </div>
          </div>

          {error && (
            <div className="form-error">
              <p>{error}</p>
            </div>
          )}

          <div className="form-submit">
            <motion.button 
              type="submit" 
              className="btn-primary btn-large btn-submit interactive-element"
              whileHover={{ scale: isSubmitting ? 1 : 1.05, y: isSubmitting ? 0 : -2 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Join the Early Access List'}
            </motion.button>
          </div>
        </form>
        </FadeIn>
      </div>

      {showSuccess && (
        <>
          <div className="message-overlay" onClick={() => setShowSuccess(false)} />
          <div className="success-message">
            <div className="success-content">
              <div className="success-icon">✓</div>
              <h3>You're on the list!</h3>
              <p>Thank you for joining the early access. We'll be in touch soon.</p>
              <p className="success-note">Your information has been saved to our database.</p>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default SignUp;

