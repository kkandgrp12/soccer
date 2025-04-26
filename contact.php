<?php include('inc/header.php') ?>

    <main>
        <section class="page-header">
            <div class="container">
                <h1>Contact Stanley FC</h1>
                <p>Get in touch with our team</p>
            </div>
        </section>

        <section class="contact-section">
            <div class="container">
                <div class="contact-grid">
                    <div class="contact-info">
                        <h2>Club Information</h2>
                        <div class="info-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <h3>Address</h3>
                                <p>Makindye<br>Salaama road<br>Uganda, M16 0RA</p>
                            </div>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-phone"></i>
                            <div>
                                <h3>Phone</h3>
                                <p>+256 (0)78 702 0825</p>
                            </div>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-envelope"></i>
                            <div>
                                <h3>Email</h3>
                                <p>info@stanleyfc.com</p>
                            </div>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-clock"></i>
                            <div>
                                <h3>Office Hours</h3>
                                <p>Monday-Friday: 9am-5pm<br>Saturday: 10am-4pm<br>Sunday: Closed</p>
                            </div>
                        </div>
                    </div>

                    <div class="contact-form">
                        <h2>Send Us a Message</h2>
                        <form id="contactForm">
                            <div class="form-group">
                                <label for="name">Full Name</label>
                                <input type="text" id="name" name="name" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email Address</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="subject">Subject</label>
                                <select id="subject" name="subject" required>
                                    <option value="" disabled selected>Select a subject</option>
                                    <option value="tickets">Ticket Information</option>
                                    <option value="membership">Membership</option>
                                    <option value="media">Media Inquiry</option>
                                    <option value="partnership">Commercial Partnership</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="message">Your Message</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="btn">Send Message</button>
                        </form>
                    </div>
                </div>

                <div class="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1668.38425867959!2d32.57863524406638!3d0.2834227748379834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sug!4v1745661688854!5m2!1sen!2sug" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>

                <div class="contact-departments">
                    <h2>Club Departments</h2>
                    <div class="departments-grid">
                        <div class="department-card">
                            <i class="fas fa-ticket-alt"></i>
                            <h3>Ticketing</h3>
                            <p>For all ticket inquiries and purchases</p>
                            <a href="mailto:tickets@unitedfc.com">tickets@stanleyfc.com</a>
                        </div>
                        <div class="department-card">
                            <i class="fas fa-store"></i>
                            <h3>Retail</h3>
                            <p>Questions about merchandise and the club shop</p>
                            <a href="mailto:retail@unitedfc.com">retail@stanleyfc.com</a>
                        </div>
                        <div class="department-card">
                            <i class="fas fa-users"></i>
                            <h3>Hospitality</h3>
                            <p>Corporate hospitality and matchday experiences</p>
                            <a href="mailto:hospitality@unitedfc.com">hospitality@stanleyfc.com</a>
                        </div>
                        <div class="department-card">
                            <i class="fas fa-graduation-cap"></i>
                            <h3>Academy</h3>
                            <p>Youth development and academy inquiries</p>
                            <a href="mailto:academy@unitedfc.com">academy@stanleyfc.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <?php include('inc/footer.php') ?>